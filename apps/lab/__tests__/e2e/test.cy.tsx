describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Tech lab").should('be.visible');
  });
});
