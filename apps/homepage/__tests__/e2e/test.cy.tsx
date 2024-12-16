describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Header").should('be.visible');
  });
});
