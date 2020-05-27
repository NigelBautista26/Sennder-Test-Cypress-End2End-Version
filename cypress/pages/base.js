class Base {

    get myProfileDropDown() { return cy.get('#account-dropdown') }

    get logout() { return cy.get('.dropdown-menu > .btn') }

    get confirmLogout() { return cy.get('.btn-danger') }

    get confirmLogoutMessage() { return cy.get('.alert > .text-center') }

    url() { return cy.visit('https://sprintboards.io/auth/login') }

    goToLoginPage() { 
        this.url()
        expect(cy.url().should('include', "sprintboards.io/auth/login"))//Asserts the URL...
     }

     logoutUser() { 
        this.myProfileDropDown.click()
        this.logout.click()
        this.confirmLogout.click()
        expect(this.confirmLogoutMessage.should('have.text', 'You are now logged out.'))
      }
    
}

export default new Base()