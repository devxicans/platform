describe('First test', () => {
  it('Should check Header see through out pages with lang en', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByText("Header").should('be.visible');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByText("Header").should('be.visible');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.findByText("Header").should('be.visible');
  });

  it('Should check Header see through out pages with lang es', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByText("Encabezado").should('be.visible');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByText("Encabezado").should('be.visible');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.findByText("Encabezado").should('be.visible');
  });
});