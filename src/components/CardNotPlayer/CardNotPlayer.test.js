import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import CardNotPlayer from "./CardNotPlayer"


test('Render CardNotPlayer component', () => {
    const component = render(<CardNotPlayer />)
    component.getByRole('heading', { name: /no players found/i })
    component.getByRole('img', { name: /img/i })
})