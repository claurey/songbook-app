import React from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const SingerButton = ({singerName}) => {

    const handleClick=() => {
        console.log('Hola');
      }

  return (
    <Stack direction="row" spacing={1} className="p-2">
        <Chip label={singerName} onClick={handleClick} />
    </Stack>
  )
}

export default SingerButton