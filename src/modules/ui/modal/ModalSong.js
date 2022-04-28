import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { closeModal } from '../../../actions/ui';
import SvgIcon from '@mui/material/SvgIcon';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import useForm from '../../../hooks/useForm';
import UploadPreviewImage from './UploadPreviewImage';
import { startCreatingSong } from '../../../actions/songs';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    borderRadius:"8px",
    boxShadow: 24,
    p: 2,
  };


const ModalSong = () => {
    const dispatch=useDispatch();

    const [formValues, handleChangeForm,reset]=useForm({title:'',singer:'',lyrics:''});

    //Open and Close Modal
    const {modalOpen}=useSelector((state) => {return state.ui;});
    const handleCloseModal=() => {
      dispatch(closeModal());
    }

    //Save values form 
    const handleSubmitSong=(e) => {
      
      dispatch(startCreatingSong(formValues, reset));
      
    }

  return (
    <div>

<Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        
        <div   id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div  role="document" >
                <div className="modal-content"> 
                <div className="modal-header">
                    <h4 className="modal-title  song__modal-title" id="exampleModalLabel">Add a new song</h4>
                    <button type="button" className="btn btn-outline-secondary" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                    X
                    </button>
                </div>
                <div className="modal-body" >
                    <form>
                    <div className="form-group">
                        <label htmlFor="song-title" className="col-form-label">Title:</label>
                        <input type="text" className="form-control" id="song-title" name="title" value={formValues.title} onChange={handleChangeForm}/>
                        <label htmlFor="song-singer" className="col-form-label">Singer:</label>
                        <input type="text" className="form-control" id="song-singer" name="singer" value={formValues.singer} onChange={handleChangeForm}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Lyrics:</label>
                        <textarea rows="6"  className="form-control" id="message-text" name="lyrics" value={formValues.lyrics} onChange={handleChangeForm}></textarea>
                    </div>
                    </form>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <div className='p-2'>
                    <label htmlFor="avatar">
                      <Tooltip title="Add image">
                        <SvgIcon className="modal__icon" component={AddPhotoAlternateIcon} fontSize='large'/> 
                      </Tooltip>
                    </label>
                    <UploadPreviewImage/>
                    
                  </div>
                  <button type="submit" className="navbar__buttons-item modal__button-save px-3"  onClick={handleSubmitSong}>Save song</button> 
                </div>
                </div>
            </div>
  </div> 
          
        </Box>
      </Modal>
      
    </div>
  )
}

export default ModalSong

