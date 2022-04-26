import { types } from "../types/types";

const initialState={
    songsList:[],
    songActivated:{},
    favoriteSongs:[]
}

const songsReducer = (state=initialState,action) => {
  switch (action.type) {
      case types.songsGetSongs:
          return {
              ...state,
              songsList:action.payload
          }
      case types.songsSetFavorite:
          return {...state, songsList:state.songsList.map(e=> (
            (e._id===action.payload.id)?{...e, favorite:action.payload.favorite}:e)
          ) }
      case types.songsClearSongs:
          return initialState
      default:
          return state;
  }
}

export default songsReducer