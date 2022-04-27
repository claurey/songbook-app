import { types } from "../types/types"



export const openModal=() => {
  return{
      type:types.uiOpenModal
  }
}

export const closeModal=() => {
  return{
      type:types.uiCloseModal
  }
}

export const uploadPreviewImage=(fileImage) => {
  return async(dispatch) => {
    const formData=new FormData();
    formData.append("upload_preset","react-songbook-app");
    formData.append("file",fileImage);
    const cloudUrl=process.env.CLOUDINARY_URL;
    console.log(cloudUrl);

    // try {
    //   const response=await fetch(`${cloudUrl}`,{
    //     method:'POST',
    //     body:formData
    //   });
    //   console.log(response);
    // } catch (error) {
      
    // }

  }
}