import { types } from "../types/types";


const initialState={
    modalOpen:false,
    previewImageFile:'',
}
const uiReducer = (state=initialState,action) => {
  switch (action.type) {
      case types.uiOpenModal:
          return {...state, modalOpen:true}
      case types.uiCloseModal:
          return {...state, modalOpen:false}
      case types.uiSetPreviewImage:
          return {...state, previewImageFile:action.payload}
   
      default:
          return state;
  }
}

export default uiReducer