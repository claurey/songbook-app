import { types } from "../types/types";

const initialState={
    userLogged: false,
    checking:true,
}

const authReducer = (state=initialState,action) => {
  switch (action.type) {
      case types.authLogin:
          return {...state,
                  ...action.payload,
                  checking:false,
                  userLogged:true}
      case types.authCheckingFinish:
          return {...state,
                  checking:false}
      case types.authLogout:
          return initialState
      default:
          return state; 
  }
}

export default authReducer



