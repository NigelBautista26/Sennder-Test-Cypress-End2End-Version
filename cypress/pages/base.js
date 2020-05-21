class Base {

    goToURL () { return cy.visit('https://sprintboards.io/auth/login') }
    
}

export default new Base()