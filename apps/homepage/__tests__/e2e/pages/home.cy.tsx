describe('Home page tests', () => {
  it('Should check header exist in home page', () => {

    cy.visit('/');

    cy.findByTestId("header").should('be.visible');

  });

  it('Should check hero message exist in home page', () => {

    cy.visit('/');

    cy.findByTestId("hero message").should('be.visible');

  });

});