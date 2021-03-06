import React from 'react';
import { useSelector } from 'react-redux';

import SongCards from '../../song/components/SongCards';


const Favorites = () => {
  
  //Get Favorite Songs
  const{songsList}=useSelector((state) => {
    return state.songs;
  });
  const favoriteSongs=songsList.filter((song) => (song.favorite===true));


  return (
    <div className='song__entry-container animate__animated animate__fadeInRight'>
    <SongCards songs={favoriteSongs}/>

    </div>
  )
}

export default Favorites