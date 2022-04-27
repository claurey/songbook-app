import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import SongCards from '../../song/components/SongCards';

const SearchScreen = () => {

  const location=useLocation();
  const {q=''}=queryString.parse(location.search);

  const {songsList}=useSelector((state) => {
    return state.songs;
  });
  const songs=songsList.filter(song=>(song.title.toLowerCase().includes(q.toLowerCase())||song.singer.toLowerCase().includes(q.toLowerCase())));

  return (
    <div className='song__entry-container animate__animated animate__fadeInRight'>
      <SongCards songs={songs}/>
    </div> 
  )
}

export default SearchScreen