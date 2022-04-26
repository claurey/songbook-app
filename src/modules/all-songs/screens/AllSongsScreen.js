import React from 'react';
import { useSelector } from 'react-redux';

import SongCards from '../../song/components/SongCards';


const AllSongsScreen = () => {

   
   const {songsList:songs}=useSelector((state) => {
    return state.songs;
  });

  return (
    <div className='song__entry-container animate__animated animate__fadeInRight'>
      <SongCards songs={songs}/>
    </div> 
  )
}

export default AllSongsScreen


