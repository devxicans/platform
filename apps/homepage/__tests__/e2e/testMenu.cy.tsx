describe('First test', () => {
  it('Should check menu buttons see through out pages with lang en', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByRole('link', {name: 'Home'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Projects'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contact'}).should('exist').and('be.visible');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByRole('link', {name: 'Home'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Projects'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contact'}).should('exist').and('be.visible');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByRole('link', {name: 'Home'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Projects'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contact'}).should('exist').and('be.visible');
  });

  it('Should check menu buttons see through out pages with lang es', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByRole('link', {name: 'Inicio'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Proyectos'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contacto'}).should('exist').and('be.visible');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByRole('link', {name: 'Inicio'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Proyectos'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contacto'}).should('exist').and('be.visible');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByRole('link', {name: 'Inicio'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Proyectos'}).should('exist').and('be.visible');
    cy.findByRole('link', {name: 'Contacto'}).should('exist').and('be.visible');
    });
});