describe('First test', () => {
  it('Should check Header see through out pages with lang en', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'en'
      }
    });
    cy.get('[data-testid="header"]').should('exist');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.get('[data-testid="header"]').should('exist');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    cy.get('[data-testid="header"]').should('exist');
  });

  it('Should check Header see through out pages with lang es', () => {
    cy.visit('/', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.get('[data-testid="header"]').should('exist');

    cy.visit('/projects', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.get('[data-testid="header"]').should('exist');

    cy.visit('/contact', {
      headers: {
        'Accept-Language': 'es'
      }
    });

    cy.get('[data-testid="header"]').should('exist');
    });
});