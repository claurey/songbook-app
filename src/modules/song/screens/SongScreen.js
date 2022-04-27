import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ReturnButton from '../../ui/ReturnButton';
import SongEntry from '../components/SongEntry';

const SongScreen = () => {

  const {songId}=useParams();

  const{songsList}=useSelector((state) => {
    return state.songs
  });

  const song=songsList.find(song=>song._id===songId);

  return (
     <div className='song__entry-container'>
        <ReturnButton/>
        <SongEntry song={song}/>

    </div>
  )
}

export default SongScreen