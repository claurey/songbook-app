import React from 'react';

import FavoriteButton from '../../ui/FavoriteButton';
import ReadButton from '../../ui/ReadButton';

const SongCard = ({song}) => {
  
    const{image,title,singer,date,favorite,_id}=song;


    return (
    <div className="col px-5">
        <div className="card">
            <div className="songcard__image">
             <img src={image} className="card-img-top" alt={image}/>
            </div>
            <div className="card-body songcard__body">
                <h5 className="card-title">{title}</h5>
                <h6 className="text-muted">{singer}</h6>
                <FavoriteButton favorite={favorite} idSong={_id}/>
            </div>
            <div className="card-footer songcard__footer d-flex justify-content-between">
                <small className="card-text">{date}</small>
                <ReadButton idSong={_id}/>
            </div>
        </div>

    </div>
      );
}

export default SongCard




