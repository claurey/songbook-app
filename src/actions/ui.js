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


export const setPreviewImage=(fileImage) => {
  return{
    type:types.uiSetPreviewImage, 
    payload:fileImage
  }
}

export const clearPreviewImage=() => {
  return{
    type:types.uiClearPreviewImage
  }
}


