import React from 'react';



const SongEntry = ({song}) => {

  const{title,singer,image, lyrics}=song;
  return (
    <>
       
        <span className='song__entry-date'>12/03/2022</span>
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