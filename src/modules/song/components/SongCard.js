import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import FavoriteButton from '../../ui/FavoriteButton';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useDispatch } from 'react-redux';
import { setActiveSong, startDeletingSong } from '../../../actions/songs';
import { openModal } from '../../../actions/ui';


const SongCard = ({song}) => {
  
    const dispatch=useDispatch();
    const{image,title,singer,favorite,_id}=song;

    const handleDeleteSong=() => {
        Swal.fire({
            title: 'Do you want to delete this song?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(startDeletingSong(_id));
              Swal.fire('Song Deleted!', '', 'success')
            } 
          });  
    }



    const handleEditSong=() => {
         dispatch(setActiveSong(song));
         dispatch(openModal());
    }

    return (
    <div className="col px-5">
        <div className="card">
            <div className="songcard__image">
             <img src={image} className="card-img-top" alt={image}/>
            </div>
            <div className="card-body songcard__body">
                <Link to={`/song/${_id} `} className="card-title songcard__title h5">{title}</Link>
                <h6 className="text-muted">{singer}</h6>
                <FavoriteButton favorite={favorite} idSong={_id} song={song} />
            </div>
            <div className="card-footer songcard__footer d-flex justify-content-between">
                <Tooltip title="Delete" placement="top" onClick={handleDeleteSong}>
                    <SvgIcon className="modal__icon" component={DeleteIcon} fontSize='medium'/> 
                </Tooltip>
                <Tooltip title="Edit" placement="top" onClick={handleEditSong}>
                    <SvgIcon className="modal__icon" component={EditIcon} fontSize='medium'/> 
                </Tooltip>
                <Link to={`/song/${_id} `} > <Tooltip title="Read" placement="top">
                    <SvgIcon className="modal__icon" component={AutoStoriesIcon} fontSize='medium'/> 
                </Tooltip></Link>
            </div>
        </div>
 
    </div>
      );
}

export default SongCard




