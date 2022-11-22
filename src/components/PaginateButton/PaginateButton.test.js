import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from 'msw';
import { server } from '../../mocks/server';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../redux/store'
import { errorMock } from "../../mocks/resolvers";
import PaginateButton from "./PaginateButton";
import ListPlayers from "../../views/ListPlayers/ListPlayers";
import pageinfo from "./PaginateButtonMock"


beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ListPlayers />
      </BrowserRouter>
    </Provider>)
})

describe('Testing PaginateButton Component', () => {

  test('The NEXT button is rendered', async () => {
    server.resetHandlers(
      rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
      ))
    await screen.findByRole('button', { name: /next/i })
  })

  test('The PREV button is rendered', async () => {
    const buttonnext = await screen.findByRole('button', { name: /next/i })
       fireEvent.click(buttonnext)
       await screen.findByRole('button', { name: /prev/i })
  })


})