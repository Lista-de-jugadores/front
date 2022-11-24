import { screen, render, fireEvent } from "@testing-library/react"
import { rest } from 'msw'
import { server } from '../../mocks/server'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from '../../redux/store'
import { errorMock } from "../../mocks/resolvers"
import ListPlayers from "../../views/ListPlayers/ListPlayers"
import SearchBar from "./SearchBar"


beforeEach(() => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ListPlayers />
            </BrowserRouter>
        </Provider>)
})

describe('SearchBar', () => {

    server.resetHandlers(
        rest.get(`${process.env.REACT_APP_API_URL}/players`, errorMock
        ))

    test('The SEARCH button is rendered in inicial state', async () => {
        screen.getByRole('button', { name: /search/i })
    })

    test('The SEARCHBAR is rendered in inicial state', () => {
        screen.getByRole('searchbox')
    })

    test('The SEARCHBAR is functional', () => {
        const inputsearch = screen.getByRole('searchbox')
        const buttonsearch = screen.getByRole('button', { name: /search/i })
        fireEvent.change(inputsearch, { target: { value: 'ass' } })
        fireEvent.click(buttonsearch)
    
        expect(inputsearch).toHaveValue('ass')
    })

})