describe('First test', () => {
  it('Should check Header see through out pages', () => {
    cy.visit('/');

    cy.findByText("Header").should('be.visible');

    cy.visit('/projects');

    cy.findByText("Header").should('be.visible');

    cy.visit('/contact');

    cy.findByText("Header").should('be.visible');

  });
});
