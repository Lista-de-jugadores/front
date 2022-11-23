import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import CardPlayer from "./CardPlayer"
import { player } from "./CardPlayerMock"

test('Render CardPlayer component', () => {

    const component = render(
        <CardPlayer
            id={player.id}
            nickname={player.nickname}
            status={player.status}
            balance={player.balance}
            avatar={player.avatar}
        />)

    component.getByRole('heading', { name: /id:1/i })
    component.getByRole('heading', { name: /ooy eqrceli/i })
    component.getByRole('heading', { name: /rlñlw brhrka/i })
    component.getByRole('heading', { name: /498724/i })
    component.getByAltText("drive.google.com/thumbnail?id=17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b")
})