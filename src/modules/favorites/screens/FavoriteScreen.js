import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGettingSongs } from '../../../actions/songs';
import SongCards from '../../song/components/SongCards';


const Favorites = () => {
  
  const dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(startGettingSongs());
  }, [dispatch])
  
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