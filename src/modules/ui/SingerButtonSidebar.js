import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGettingSongs } from '../../actions/songs';
import SingerButton from './SingerButton';

const SingerButtonSidebar = () => {

  const dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(startGettingSongs());
  }, [dispatch])

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