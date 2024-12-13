describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Tech lab").should('be.visible');
  });

  it("Should check if the button exists", () => {
    cy.visit('/');

    cy.contains('Click Here').click();
  })
});
