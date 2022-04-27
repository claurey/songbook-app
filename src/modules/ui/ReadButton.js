import React from 'react';
import { Link } from 'react-router-dom';

const ReadButton = ({idSong}) => {
  return (
    <Link to={`/song/${idSong} `} className='btn-read'> <span className="btn-read-text">READ</span></Link>
  
  )
}

export default ReadButton