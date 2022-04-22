import React from 'react';


import SvgIcon from '@mui/material/SvgIcon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = ({favorite}) => {
  return (
    <button className='btn-favorite'><SvgIcon component={favorite?FavoriteIcon:FavoriteBorderIcon} /></button>
  )
}

export default FavoriteButton