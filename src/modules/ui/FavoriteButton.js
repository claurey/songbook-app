import React from 'react';
import { useDispatch } from 'react-redux';

import SvgIcon from '@mui/material/SvgIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { startUpdatingFavoriteSong } from '../../actions/songs';



const FavoriteButton = ({favorite, idSong, song}) => {

  
  const dispatch=useDispatch();

  const handleFavoriteButton=() => { 
    dispatch(startUpdatingFavoriteSong(song,idSong,favorite));
    
  }

  return (
    <button className='btn-favorite' onClick={handleFavoriteButton}><SvgIcon component={favorite?FavoriteIcon:FavoriteBorderIcon} /></button>
  )
}

export default FavoriteButton