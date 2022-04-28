import { types } from "../types/types";

const initialState={
    songsList:[],
}

const songsReducer = (state=initialState,action) => {
  switch (action.type) {
      case types.songsGetSongs:
          return {
              ...state,
              songsList:action.payload
          }
      case types.songsCreateSong:
          return {
        ...state,
        songsList:[...state.songsList,action.payload]
          }
      case types.songsDeleteSong:
          return {
        ...state,
        songsList:state.songsList.filter(e=> (
            (e._id!==action.payload))
          ) 
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