import { rest } from 'msw'
import { mockRanking } from './resolvers'

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}/players?page=2`, mockRanking)
]

