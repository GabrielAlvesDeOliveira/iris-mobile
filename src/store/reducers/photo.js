import { TAKE_PHOTO } from "../actions/ActionsTypes";

const initialState = {
  uri: '',
  base64: ''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_PHOTO:
      return {
        ...state,
        uri: action.payload.uri,
        base64: action.payload.base64
      };
    default:
      return state;
  }
}

export default reducer;