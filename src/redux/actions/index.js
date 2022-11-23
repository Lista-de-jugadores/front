import { GET_PLAYERS } from '../constant/constans'

export function getPlayers(input, page) {
  return async function (dispatch) {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_API_URL}/players?input=${input}&page=${page}`
      )
      const res = await data.json()
      dispatch({
        type: GET_PLAYERS,
        payload: res
      })
    } catch (e) {
      return console.log('ERROR!', e)
    }
  }
}
