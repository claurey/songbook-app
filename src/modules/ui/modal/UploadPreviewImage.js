import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

import { setPreviewImage } from '../../../actions/ui';

const UploadPreviewImage = ({imageFile=""}) => {
    const dispatch=useDispatch();
    const imageRef = useRef();
    //Show preview and save state only in Redux
    const handleUploadImage=(e) => {
    const file=e.target.files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=() => {
        dispatch(setPreviewImage(reader.result));
        imageRef.current.src=reader.result;
    }

    }
  return (
    <>
     <input type="file"
                          id="avatar" 
                          name="avatar"
                          ref={imageRef}
                          accept="image/png, image/jpeg" style={{display:'none'}} 
                          onChange={handleUploadImage} />
                    <div className='modal__image-preview'>
                        <img 
                        src={imageFile} 
                        ref={imageRef}
                        width="60px" alt="" />
                    </div>
    </>
  )
}

export default UploadPreviewImage