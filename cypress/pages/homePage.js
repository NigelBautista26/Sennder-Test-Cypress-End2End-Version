class HomePage {

    get createBoardButton() { return cy.get('.d-flex > .btn-primary') }

    clickCreateBoardButton () { 
        cy.wait(2000) // This is a temporary workaround because Cypress seems to detach itself from this DOM element... 
        this.createBoardButton.click()
    }
    
}

export default new HomePage()