describe('Project page tests', () => {
  it('Should check header exist in home page', () => {

    cy.visit('/projects');

    cy.get('[data-testid="header"]').should('exist');
    
  });

});