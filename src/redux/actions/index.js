import { GET_PLAYERS } from '../constant/constans';

export function getPlayers(input, page) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `https://back-production-70cd.up.railway.app/players?input=${input}&page=${page}`
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
