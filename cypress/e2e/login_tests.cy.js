describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('https://www.alinea.dk')
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
  })

  it('login with email and password', () => {

    cy.get('nav.user-menu div.user').should('exist').click()
    cy.get('a[href="/user/login"]').contains('Log in').should('be.visible').click()
    cy.get('#edit-name').type('User', { force: true })
    cy.get('#edit-pass').type('Pass', { force: true })
    cy.get('#edit-submit').click()
    })
})