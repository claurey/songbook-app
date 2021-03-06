import React from 'react';

import SongCard from './SongCard';

const SongCards = ({songs}) => {

   

  return (

    <>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3   g-4 ">
            {songs.map((song)=>(<SongCard key={song._id} song={song}/>))}
        </div>
    </>
   
  )
}

export default SongCards