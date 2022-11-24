import { rest } from 'msw'
import { initialplayers, searchplayers , searchid, secondplayers } from './resolvers'

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}/players`, initialplayers),
    rest.get('/playerspage2', secondplayers),
    rest.get('/playersinputsasd', searchplayers),
    rest.get('/playersinput1', searchid)
]

