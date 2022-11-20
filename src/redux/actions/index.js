import {
  GET_PLAYERS
} from '../constant/constans';

export function getPlayers(input) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `https://back-production-70cd.up.railway.app/players?input=${input||""}&page=${1}`
      );
      const res = await data.json();
          dispatch({
        type: GET_PLAYERS,
        payload: res
      });
    } catch (e) {
      return console.log('ERROR!', e);
    }
  };
}
