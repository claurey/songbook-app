import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SongCards from '../../song/components/SongCards';
import { startGettingSongs } from '../../../actions/songs';


const AllSongsScreen = () => {

   const dispatch=useDispatch();
   //Get songs
   useEffect(() => {
    dispatch(startGettingSongs());
    
   }, [dispatch]);
   
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


