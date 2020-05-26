/// <reference types="Cypress" />
import base from "../../pages/base"
import loginPage from "../../pages/loginPage"
import homePage from "../../pages/homePage"
import boardPage from "../../pages/boardPage"
import cardPage from "../../pages/cardPage"

describe("Test The Application", () => {
    before(() => {  
        base.goToLoginPage()
        loginPage.login()
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('api_token', 'remember_token')
        Cypress.Cookies.preserveOnce('user', 'remember_token')
    })

    it('Create Board', () => {
		homePage.clickCreateBoardButton()
		boardPage.createBoard()
	})
	
	it('Add a Green card.', () => {
        cardPage.createGreenCard()
	})

	it('Add a Red card.', () => {
		cardPage.createRedCard()
	})

	it('Click thumbs up for the first card.', () => {
		cardPage.ThumbsUp()
	})

	it('Delete the red card created', () => {
		cardPage.deleteRedCard()
	})
    
})