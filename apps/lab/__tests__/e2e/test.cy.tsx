describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Tech lab").should('be.visible');
  });

  it('Should render CardCustom with correct content and class', () => {
    cy.visit('/');

    cy.findByText('My package').should('be.visible');
  });
});
