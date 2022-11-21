import { GET_PLAYERS } from '../constant/constans'

const initialState = {
  players: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    default:
      return state;
  };
}

export default rootReducer