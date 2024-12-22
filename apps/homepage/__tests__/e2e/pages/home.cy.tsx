describe('Home page tests', () => {
  it('Should check header exist in home page', () => {

    cy.visit('/');

    cy.get('[data-testid="header"]').should('exist');

  });

});