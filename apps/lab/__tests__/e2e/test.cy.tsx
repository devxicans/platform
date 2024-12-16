describe('First test', () => {
  it('Should check title', () => {
    cy.visit('/');

    cy.findByText("Tech lab").should('be.visible');
  });

  it("Should check if the button exists", () => {
    cy.visit('/')

    cy.findByRole('button', { name: 'Click Here' }).should('be.visible').click();
  })

  it("Should check if label for input exists", () => {
    cy.visit('/')

    cy.findByRole('textbox', { name: 'My input' }).should('exist').and('be.visible');
  })

  it("Should check if input is writable", () => {
    cy.visit('/')

    cy.findByRole('textbox', { name: 'My input' }).type('Hola').should('have.value', 'Hola');
  })
});
