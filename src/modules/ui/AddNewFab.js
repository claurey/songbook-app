import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '../../actions/ui';



const AddNewFab = () => {
  const dispatch=useDispatch();
  
  const handleClickAddSong=() => {
    dispatch(openModal());

  }
  return (
    <button className='fab' onClick={handleClickAddSong}>
    +
    </button>
  ) 
}

export default AddNewFab