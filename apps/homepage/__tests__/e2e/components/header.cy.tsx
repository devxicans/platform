describe('Header tests', () => {
  it('Should check header component includes the menu (EN)', () => {
    cy.visit('/');

    cy.findByRole('link', {name: 'Home'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Projects'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contact'}).should('exist').and('be.visible');

  });

  it('Should check header component includes the menu (ES)', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByRole('link', {name: 'Inicio'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Proyectos'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contacto'}).should('exist').and('be.visible');
  });
});