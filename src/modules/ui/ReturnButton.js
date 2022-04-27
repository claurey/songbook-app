import React from 'react';
import { useNavigate } from 'react-router-dom';

import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ReturnButton = () => {
  const navigate=useNavigate();

  const handleClickReturn=() => {
    navigate(-1);
  }

  return (
    <div className="song__entry-return" onClick={handleClickReturn}>
        <SvgIcon component={ArrowBackIcon} />
        </div>
  )
}

export default ReturnButton