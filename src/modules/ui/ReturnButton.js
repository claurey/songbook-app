import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ReturnButton = () => {
  return (
    <div className="song__entry-return">
        <SvgIcon component={ArrowBackIcon} />
        </div>
  )
}

export default ReturnButton