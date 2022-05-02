import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SongCards from '../../song/components/SongCards';

const SingerScreen = () => {

  const {singerId}=useParams();
  //Get Favorite Songs
  const{songsList}=useSelector((state) => {
    return state.songs;
  });
  const singerSongs=songsList.filter((song) => (song.singer===singerId));

  return (
    <>
    {/* <h2 className='text-center pt-4'>{singerId}</h2> */}
    <div className='song__entry-container animate__animated animate__fadeInRight'>
    <SongCards songs={singerSongs}/> 
  </div> </>
    
  )
}

export default SingerScreen