const email = 'sennderqa3@gmail.com'
const password = 'n*H7A7f@&ikbwu'

class LoginPage {

    get emailField() { return cy.get("input[type='email']") }
    get passwordField() { return cy.get("input[type='password']") }
    get loginButton() { return cy.get('.btn-primary') }
    
    login() { 
        this.emailField.type(email)
        this.passwordField.type(password)
        this.loginButton.click()
        cy.url().should('include', "https://sprintboards.io") //Asserts the URL...
    }
    
}

export default new LoginPage()