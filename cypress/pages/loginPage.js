class LoginPage {

    get emailField() { return cy.get("input[type='email']") }
    get passwordField() { return cy.get("input[type='password']") }
    get loginButton() { return cy.get('.btn-primary') }
    
    login() { 
        cy.fixture('user').as('userData') // User Data from a JSON Fixture file...
        cy.get("@userData").then((userData) => { // use my Fixture Data...
        this.emailField.type(userData.email)
        this.passwordField.type(userData.password)
        this.loginButton.click()
        cy.url().should('include', "https://sprintboards.io") //Asserts the URL...
        })  
    }
    
}

export default new LoginPage()