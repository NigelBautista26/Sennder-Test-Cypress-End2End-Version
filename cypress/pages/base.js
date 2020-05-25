class Base {

    url() { return cy.visit('https://sprintboards.io/auth/login') }

    goToLoginPage() { 
        this.url()
        expect(cy.url().should("include", "sprintboards.io/auth/login"))//Asserts the URL...
     }
    
}

export default new Base()