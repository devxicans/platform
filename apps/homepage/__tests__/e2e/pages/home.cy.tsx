describe('Home page tests', () => {
  it('Should check header exist in home page', () => {

    cy.visit('/');

    cy.get('[data-testid="header"]').should('exist');

  });

  it('Should check hero message exist in home page', () => {

    cy.visit('/');

    cy.get('[data-testid="hero message"]').should('exist');

  });

});