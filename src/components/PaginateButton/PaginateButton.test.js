import { screen, render, fireEvent } from "@testing-library/react"
import { rest } from 'msw'
import { server } from '../../mocks/server'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from '../../redux/store'
import { errorMock } from "../../mocks/resolvers"
import ListPlayers from "../../views/ListPlayers/ListPlayers"

beforeAll(() => server.listen({  onUnhandledRequests: 'warn' }));

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ListPlayers />
      </BrowserRouter>
    </Provider>)
})

describe('PaginateButton', () => {

  test('The PREV button not is rendered in inicial state', async () => {
   server.resetHandlers(
      rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
      )) 
    const prev = screen.queryAllByText('prev')
    expect(prev).toHaveLength(0)
  })

  test('The NEXT button is rendered', async () => {
    server.resetHandlers(
      rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
      ))
    await screen.findByRole('button', { name: /next/i })
  })


  test('The PREV-NEXT button is not rendered in a ID search', async () => {
    server.resetHandlers(
      rest.get('/playersinput1', errorMock
      ))
    const prev = screen.queryAllByText('prev')
    const next = screen.queryAllByText('next')
    expect(prev).toHaveLength(0)
    expect(next).toHaveLength(0)

  })
})