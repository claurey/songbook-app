import React from 'react';


import ReturnButton from '../../ui/ReturnButton';
import SongEntry from '../components/SongEntry';

const SongScreen = () => {
  return (
    
     <div className='song__entry-container'>
        <ReturnButton/>
        <SongEntry/>

    </div>
  )
}

export default SongScreen