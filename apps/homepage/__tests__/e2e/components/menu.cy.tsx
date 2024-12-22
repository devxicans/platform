describe('Menu buttons test', () => {

  it('Should check the header includes only 3 menu buttons', () => {
    cy.visit('/');
    cy.get('[data-testid="header"]')
      .find('.buttonMenu')
      .children()
      .should('have.length', 3);
  });

  it('Should navigate to the correct page when a menu button is clicked', () => {
    cy.visit('/');

    cy.findByRole('link', {name: 'Home'}).click();

    cy.url().should('include', '/');
    
    cy.visit('/');

    cy.findByRole('link', {name: 'Projects'}).click();
    cy.url().should('include', '/projects');

    cy.findByRole('link', {name: 'Contact'}).click();
    cy.url().should('include', '/contact');
  });
});
