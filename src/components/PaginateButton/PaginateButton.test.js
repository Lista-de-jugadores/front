import { screen, render, fireEvent } from "@testing-library/react"
import { rest } from 'msw'
import { server } from '../../mocks/server'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from '../../redux/store'
import { errorMock } from "../../mocks/resolvers"
import ListPlayers from "../../views/ListPlayers/ListPlayers"

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ListPlayers />
      </BrowserRouter>
    </Provider>)
})

describe('PaginateButton', () => {

  server.resetHandlers(
    rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
    ))

  test('The PREV button not is rendered in inicial state', async () => {
    const prev = screen.queryAllByText('prev')
    expect(prev).toHaveLength(0)
  })

  test('The NEXT button is rendered', async () => {
    await screen.findByRole('button', { name: /next/i })
  })

  test('The PREV button is rendered ', async () => {
    const buttonnext = await screen.findByRole('button', { name: /next/i })
    fireEvent.click(buttonnext)
    await screen.findByRole('button', { name: /prev/i })
  })

  server.resetHandlers(
    rest.get(`${process.env.REACT_APP_API_URL}/players?input=sasd`, errorMock
    ))

  test('The PREV-NEXT button is not rendered in a id search', async () => {
    const prev = screen.queryAllByText('prev')
    const next = screen.queryAllByText('next')
    expect(prev).toHaveLength(0)
    expect(next).toHaveLength(0)
  })
})