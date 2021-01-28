describe('Form Inputs', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submitbtn')
            .should('be.disabled')
    })

    it('Check name input', () => {
        cy.get('input[name="name"]')
            .type('Catherine')
            .should('have.value', 'Catherine')
    })

    it('Check email input', () => {
        cy.get('input[name="email"]')
            .type('kitty@meow.com')
            .should('have.value', 'kitty@meow.com')
    })

    it('Check password input', () => {
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
    })

    it('Check ToS input', () => {
        cy.get('input[name="service"]')
            .click()
            .should('have.value', 'true')
    })

    it('Check if user can submit the form data', () => {
        cy.get('.submitbtn')
            .should('not.be.disabled')
    })
})

// Check for form validation if an input is left empty
describe('Form Validation: Missing Username', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submitbtn')
            .should('be.disabled')
    })

    it('Check missing Username', () => {
        cy.get('input[name="email"]')
            .type('kitty@meow.com')
            .should('have.value', 'kitty@meow.com')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('input[name="service"]')
            .click()
            .should('have.value', 'true')
        cy.get('.submitbtn')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing Email', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submitbtn')
            .should('be.disabled')
    })

    it('Check missing Email', () => {
        cy.get('input[name="name"]')
            .type('Catherine')
            .should('have.value', 'Catherine')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('input[name="service"]')
            .click()
            .should('have.value', 'true')
        cy.get('.submitbtn')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing Password', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submitbtn')
            .should('be.disabled')
    })

    it('Check missing Password ', () => {
        cy.get('input[name="name"]')
            .type('Catherine')
            .should('have.value', 'Catherine')
        cy.get('input[name="email"]')
            .type('kitty@meow.com')
            .should('have.value', 'kitty@meow.com')
        cy.get('input[name="service"]')
            .click()
            .should('have.value', 'true')
        cy.get('.submitbtn')
            .should('be.disabled')
    })
})

describe('Form Validation: Missing ToS', () => {
    it('Connects to page', () => {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })

    it('Button should be disabled', () => {
        cy.get('.submitbtn')
            .should('be.disabled')
    })

    it('Check missing Terms of Service input', () => {
        cy.get('input[name="name"]')
            .type('Catherine')
            .should('have.value', 'Catherine')
        cy.get('input[name="email"]')
            .type('kitty@meow.com')
            .should('have.value', 'kitty@meow.com')
        cy.get('input[name="password"]')
            .type('password1234')
            .should('have.value', 'password1234')
        cy.get('.submitbtn')
            .should('be.disabled')
    })
})