describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("1x developers").should('be.visible');
  });
});
