
import Swal from 'sweetalert2';
import { format } from 'date-fns';

import { fetchWithToken } from "../helpers/fetch";
import { types } from '../types/types';
import upLoadingImage from '../helpers/upLoadingImage';
import { clearPreviewImage, closeModal } from './ui';


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

const setFavorite=(favorite,id) => {
    
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
  
    //Create new song to save on DB
    const newSong={
      ...song,
      favorite:false,
      date: format(new Date(), 'P')
    }

    if(previewImageFile!==''){
      //Get image of Cloudinary
      const cloudResponse= await upLoadingImage(previewImageFile);
      const urlImageFile=cloudResponse.secure_url;
      //Create new image
      newSong.image=urlImageFile;
    
    }else{
      newSong.image='https://res.cloudinary.com/dzrsng18g/image/upload/v1651294001/i2yqk23qriiwaetqqry3.jpg';
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
    reset();
    Swal.fire('Song saved!', '', 'success');
    dispatch(clearPreviewImage());
    
  }
}

const addNewSong=(song) => {
  return {
    type:types.songsCreateSong,
    payload:song
  }
}

export const startDeletingSong =(idSong) => {
  return async(dispatch) => {
    const response=await fetchWithToken(`songs/${idSong}`,"DELETE",{});
    const data = await response.json();

    if(!data.ok){
      return Swal.fire({
        title:'Error',
        text:"It couldn't delete the song. Please,try again!",
        icon:'error',
        customClass: {
          container: 'my-swal'
        }});
    }
    dispatch(deleteSong(idSong));

  }
}

export const startUpdatingSong=(songActive, song, reset) => {
  return async(dispatch,getState) => {
    
    const {ui:{previewImageFile}}=getState();

    const updatedSong={
      ...songActive,
      ...song,
      date: format(new Date(), 'P')
    }

    if(previewImageFile!==''){
      //Get image of Cloudinary
      const cloudResponse= await upLoadingImage(previewImageFile);
      const urlImageFile=cloudResponse.secure_url;
      //Create new image
      updatedSong.image=urlImageFile;
    
    }

    const response = await fetchWithToken(`songs/${songActive._id}`,"PUT",updatedSong);
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
    dispatch(updateSong(data.song)); 
    setTimeout(() => {
      console.log("h")
    }, 5000);
    dispatch(closeModal());
    reset();
    Swal.fire('Song updated!', '', 'success');
    dispatch(clearPreviewImage());
  }
}


export const startUpdatingFavoriteSong=(song,idSong,favorite) => {
  return async(dispatch) => {
    

    const updatedSong={
      ...song,
      favorite: !favorite
    }


    const response = await fetchWithToken(`songs/${idSong}`,"PUT",updatedSong);
    const data=await response.json();
    if(!data.ok){
      
       return Swal.fire({
        title:'Error',
        text:"It couldn't update song. Please try again",
        icon:'error',
        customClass: {
          container: 'my-swal'
        }
      });
    }
    dispatch(setFavorite(data.song.favorite,data.song._id)); 

  }
}


const updateSong=(song) => {
  return{
    type:types.songsUpdateSong,
    payload:song
  }
}

const deleteSong=(idSong) => {
  return{
    type:types.songsDeleteSong,
    payload:idSong
  }
}

export const setActiveSong=(song) => {
  return {
    type:types.songsSetActiveSong,
    payload:song
}
}

export const clearActiveSong=() => {
  return {
    type:types.songsClearActiveSong,
  }
}


export const clearSongs=() => {
  return{
    type:types.songsClearSongs
  }
}