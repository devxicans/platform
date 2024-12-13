describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Tech lab").should('be.visible');
  });

  it("Should check if the button exists", () => {
    cy.visit('/')

    const button = cy.findByRole('button', { name: 'Click Here' });

    button.should('be.visible');

    button.click();
  })
});
