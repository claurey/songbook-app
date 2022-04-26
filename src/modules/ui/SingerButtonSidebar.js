import React from 'react';
import { useSelector } from 'react-redux';
import SingerButton from './SingerButton';



const SingerButtonSidebar = () => {


  //Get songs
  const {songsList}=useSelector((state) => {
    return state.songs;
  });


  
  return (

    songsList.map((song) => {
      return <SingerButton singerName={song.singer} key={song._id}/>
    })
  )
}

export default SingerButtonSidebar