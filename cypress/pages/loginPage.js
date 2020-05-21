class LoginPage {

    get emailField() { return cy.get("input[type='email']") }
    get passwordField() { return cy.get("input[type='password']") }
    get loginButton() { return cy.get('.btn-primary') }
    
    login () { 
        this.emailField.type('sennderqa3@gmail.com')
        this.passwordField.type('n*H7A7f@&ikbwu')
        this.loginButton.click()
        cy.url().should("include", "https://sprintboards.io") //Asserts the URL...
    }
    
}

export default new LoginPage()