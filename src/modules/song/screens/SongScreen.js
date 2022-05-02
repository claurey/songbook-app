import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ReturnButton from '../../ui/ReturnButton';
import SongEntry from '../components/SongEntry';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const SongScreen = () => {

 

  const {songId}=useParams();

  const{songsList}=useSelector((state) => {
    return state.songs
  });

  ///

  if(songsList.length<1){
    return <Stack className="d-flex justify-content-center align-items-center p-5 m-5" sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      
    </Stack>
  }
  
///
  const song=songsList.find(song=>song._id===songId);

  return (
     <div className='song__entry-container'>
        <ReturnButton/>
        <SongEntry song={song}/>

    </div>
  )
}

export default SongScreen