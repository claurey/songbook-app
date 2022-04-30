import { types } from "../types/types";

const initialState={
    songsList:[],
    songActive:{
        title:'',
        singer:'',
        lyrics:'',
        image:''

    }
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
      case types.songsUpdateSong:
            return {
          ...state,
          songsList:state.songsList.map(e=> {
            if(e._id===action.payload._id){
              return action.payload;
            }else{
              return e;
            }
          }
          ) 
            }
      case types.songsDeleteSong:
          return {
        ...state,
        songsList:state.songsList.filter(e=> (
            (e._id!==action.payload))
          ) 
}
      case types.songsSetActiveSong:
          return {
        ...state,
        songActive:action.payload
    }
      case types.songsClearActiveSong:
          return {
        ...state,
        songActive:{
            title:'',
            singer:'',
            lyrics:'',
            image:''
    
        }
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