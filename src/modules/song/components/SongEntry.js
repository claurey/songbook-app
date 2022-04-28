import React from 'react';
import { format } from 'date-fns';


const SongEntry = ({song}) => {

  const{title,singer,image,date, lyrics}=song;

  const convertedDate=format(new Date(date), 'PP')
 
  return (
    <>
       
        <span className='song__entry-date'>{convertedDate}</span>
        <h2>{title}</h2>
        <h3>{singer}</h3>
        <figure className='py-3'>
            <img src={image} style={{width:300}} alt="Trulli" />
        </figure>
        <p className='song__entry-body'>{lyrics}</p>

    </>
  )
}

export default SongEntry