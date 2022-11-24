import { screen, render, fireEvent, waitFor } from "@testing-library/react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { server } from '../../mocks/server'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from '../../redux/store'
import { errorMock } from "../../mocks/resolvers"
import ListPlayers from "../../views/ListPlayers/ListPlayers"
import CardsGrid from "./CardsGrid"

describe('CardsGrid', () => {

    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ListPlayers>
                        <CardsGrid />
                    </ListPlayers>
                </BrowserRouter>
            </Provider>
        )
    })

    test('Render 20 cards at start', async () => {
        server.resetHandlers(
            rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
            ))
        const cards = await screen.findAllByText("id", { exact: false })
        expect(cards).toHaveLength(20)
    })
})