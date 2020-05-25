import { expect } from 'chai'
import 'chai/register-should'

const boardTitleValue = 'Create a Board'

class boardPage {

  get title() { return cy.get('.font-weight-normal.mb-0') }

  get sessionNameField() { return cy.get('.form-control') }

  get chooseOwnerSelection() { return cy.get('.card-body > .mb-4 > .custom-select') }

  get createBoardButton() { return cy.get('.w-100 > .btn') }

  get confirmationPopup() { return cy.get('.swal-modal') }

  createBoard() {
    this.sessionNameField.type('Nigels Board')
    expect(this.title.should('have.text', boardTitleValue))
    this.chooseOwnerSelection.select('Sennder')
	  expect(cy.url().should('include', 'boards/create')) // The string can also be put into a global variable...
    this.createBoardButton.click()
    expect(cy.url().should('include', 'https://sprintboards.io/boards/')) // The string can also be put into a global variable...
    expect(this.confirmationPopup.should('contain', 'Created')) // The string can also be put into a global variable...
  }
  
}
module.exports = new boardPage()