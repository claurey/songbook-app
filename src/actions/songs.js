
import Swal from 'sweetalert2';
import { format } from 'date-fns';

import { fetchWithToken } from "../helpers/fetch";
import { types } from '../types/types';
import upLoadingImage from '../helpers/upLoadingImage';
import { closeModal } from './ui';


export const startGettingSongs=() => {
  return async(dispatch) => {
    const response = await fetchWithToken("songs/","GET",{});
    const data =await response.json();

    if(!data.ok){
        return Swal.fire("Error","User invalid","error");
    }
    dispatch(GetSongs(data.songs));

  }
}

const GetSongs=(songs) => {
  return{
      type:types.songsGetSongs,
      payload: songs
  }
}

export const setFavorite=(favorite,id) => {
    
    return {
        type: types.songsSetFavorite,
        payload: {
            favorite,
            id
        }
    }
  }


export const startCreatingSong=(song, reset) => {
  return async(dispatch,getState) => {

    const {ui:{previewImageFile}}=getState();
    //Get image of Cloudinary
    const cloudResponse= await upLoadingImage(previewImageFile);
    const urlImageFile=cloudResponse.secure_url;
    //Create new song to save on DB
    const newSong={
      ...song,
      favorite:false,
      date: format(new Date(), 'P'),
      image:urlImageFile
    }
    
    const response = await fetchWithToken("songs","POST",newSong);
    const data=await response.json();
    if(!data.ok){
      
       return Swal.fire({
        title:'Error',
        text:"It couldn't save the song. The song must have a title, singer and lyrics. Please,try again!",
        icon:'error',
        customClass: {
          container: 'my-swal'
        }
        
        
      });
    }
    dispatch(addNewSong(data.song)); 
    dispatch(closeModal());
    //Pending Clean form
    reset();
    Swal.fire('Song saved!', '', 'success');
    
  }
}

const addNewSong=(song) => {
  return {
    type:types.songsCreateSong,
    payload:song
  }
}


export const clearSongs=() => {
  return{
    type:types.songsClearSongs
  }
}