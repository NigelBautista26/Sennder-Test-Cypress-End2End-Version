const greenCardTitleValue = 'Goal was achieved'
const greenCardDescriptionValue = 'Sprint was well planned'
const redCardTitleValue = 'Goal was not achieved'
const redCardDescriptionValue = 'No description provided.'
const deletePopUpTitle = 'Delete Card'
const messageForDelitingCard = 'Are you sure you want to continue?'
const deleteConfirmationMessage = 'The card has been deleted'

class cardPage {

  get addTitle() { return cy.get('.w-100 > .mb-0 > .form-control').first() }

  get addDescription() { return cy.get('.w-100 > .mb-0 > .form-control').last() }

  get greenPlusButton() { return cy.get(':nth-child(1) > .card-deck > .card') }

  get addGreenCard() { return cy.get('.btn.text-white.btn-success') }

  get greenCardTitle() { return cy.get('.border-success.bg-success.px-2') }

  get greenCardDesc() { return cy.get('.border-success.text-center > div.react-contextmenu-wrapper > div >p') }

  get redPlusButton() { return cy.get('.btn-link.border-danger.empty-card.text-danger') }

  get addRedCard() { return cy.get('.btn.text-white.btn-danger') }

  get redCardTitle() { return cy.get('.border-danger.bg-danger.px-2') }

  get redCardDesc() { return cy.get('.border-danger.text-center > div.react-contextmenu-wrapper > div >p') }

  get thumbsUpIcon() { return cy.get(':nth-child(1) > .card-deck > .no-highlighting > .react-contextmenu-wrapper > .card-body > :nth-child(3) > .d-inline-flex > .ml-3 > .btn') }

  get thumbsUpIconCount() { return cy.get('.btn.btn-link.disabled.pointer-events.text-success.mb-0.p-0') }

  get deleteRedCardButton() { return cy.get('div:nth-child(2) > div > div > div > div > div:nth-child(3) > ul > li:nth-child(2) > button') }

  get deletePopUpTitleText() { return cy.get('.modal-title.h4') }

  get deletePopUpStmtText() { return cy.get('.modal-body > p.mb-0') }

  get confirmDelete() { return cy.get('.btn.btn-danger') }

  get deleteConfirmation() { return cy.get('.toast-message') }

  createGreenCard() {
    this.greenPlusButton.click()
    this.addTitle.type(greenCardTitleValue)
    this.addDescription.type(greenCardDescriptionValue)
    this.addGreenCard.click()
    expect(this.greenCardTitle.should('have.text', greenCardTitleValue))
    expect(this.greenCardDesc.should('have.text', greenCardDescriptionValue))
  }

  createRedCard() {
    this.redPlusButton.click()
    this.addTitle.type(redCardTitleValue)
    this.addDescription.type(redCardDescriptionValue)
    this.addRedCard.click()
    expect(this.redCardTitle.should('have.text', redCardTitleValue))
    expect(this.redCardDesc.should('have.text', redCardDescriptionValue))
  }

  ThumbsUp() { 
    this.thumbsUpIcon.click()
    expect(this.thumbsUpIconCount.should('have.text', '1'))
  }

  deleteRedCard() {
     this.deleteRedCardButton.click()
     expect(this.deletePopUpTitleText.should('have.text', deletePopUpTitle))
     expect(this.deletePopUpStmtText.should('have.text', messageForDelitingCard))
     this.confirmDelete.click()
     expect(this.deleteConfirmation.should('have.text', deleteConfirmationMessage)) 
  }

}
module.exports = new cardPage()