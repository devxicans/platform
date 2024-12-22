describe('Contact page tests', () => {
  it('Should check header exist in home page', () => {

    cy.visit('/contact');

    cy.get('[data-testid="header"]').should('exist');
    
  });

});