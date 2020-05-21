/// <reference types="Cypress" />
import base from "../../pages/base"
import loginPage from "../../pages/loginPage"
import homePage from "../../pages/homePage"
import boardPage from "../../pages/boardPage"
import cardPage from "../../pages/cardPage"

describe("Test The Application", () => {
    beforeEach(() => {  
        base.goToURL()
        cy.url().should("include", "sprintboards.io/auth/login") //Asserts the URL...
        loginPage.login()
        // Im putting the create board in here and not as a test because this is a pre step for card creation...
        homePage.clickCreateBoardButton()
        boardPage.createBoard()
    })

    it('End To End Scenario To Test...', () => {
        cardPage.createGreenCard()
        cardPage.createRedCard()
        cardPage.ThumbsUp()
        cardPage.deleteRedCard()
    })
    
})