
import Swal from 'sweetalert2';

import { fetchWithToken } from "../helpers/fetch";
import { types } from '../types/types';


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


export const clearSongs=() => {
  return{
    type:types.songsClearSongs
  }
}