describe('UX / UI Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.alinea.dk')
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()
  })

  it('locate the main navigation menu', () => {
    cy.get('.header-main-nav').should('contain', 'Køb læremidler')
    cy.get('.header-main-nav').should('contain', 'Lær med os')
    cy.get('.header-main-nav').should('contain', 'Mød os')
    cy.get('.header-main-nav').should('contain', 'Få hjælp')
    cy.get('.header-main-nav').should('contain', 'Se dine adgange')
    cy.get('nav.right-menu a.search').should('exist').and('contain.text', 'Search')
    cy.get('div.cart-flyout span.text').should('exist').and('contain.text', 'Se kurv')
    cy.get('nav.user-menu div.user').should('exist').and('contain.text', 'User')
    })
})