/// <reference types="cypress" />

describe('Search in list user', () => {

    it('Prev button hidden on the first page', () => {
        cy.visit('/')
            .wait(1000)
        cy.get(".paginatebutton-container").children().contains("PREV").should("not.exist")
    })

    it('Simple search', () => {
        cy.get(".searchbar-search").type("ass")
        cy.get(".searchbar-button").click()
        cy.contains("ass").should("be.visible")
    })

    it('Next button hidden on the last page', () => {
        cy.get("#paginatebutton-next").click()
            .wait(1000)
            .click()
            .wait(1000)
        cy.get(".paginatebutton-container").children().contains("NEXT").should("not.exist")
    })

    it('Number search', () => {
        cy.get(".searchbar-search").clear().type("1")
        cy.get(".searchbar-button").click()
            .wait(1000)
        cy.contains("ID:1").should("be.visible")
    })
})



