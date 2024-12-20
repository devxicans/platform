describe('Localization Route Tests', () => {
  const locales = ['en', 'es'];
  const routes = ['/', '/projects', '/contact'];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      it(`should display the ${route} page correctly in ${locale}`, () => {
        cy.visit(`/${locale}${route}`);

        if (locale === 'en' && route === '/') {
          cy.contains('HomePage').should('be.visible');
        } else if (locale === 'es' && route === '/') {
          cy.contains('Pagina Principal').should('be.visible');
        }
      });

      it(`should display the header in the page ${locale}${route} correctly`, () => {
        cy.visit(`/${locale}${route}`);

        if (locale === 'en' && route === '/') {
          cy.contains('Header').should('be.visible');
        } else if (locale === 'en' && route === '/contact') {
          cy.contains('Header').should('be.visible');
        } else if (locale === 'en' && route === '/') {
          cy.contains('Header').should('be.visible');
        }

        if (locale === 'es' && route === '/') {
          cy.contains('Encabezado').should('be.visible');
        } else if (locale === 'es' && route === '/contact') {
          cy.contains('Encabezado').should('be.visible');
        } else if (locale === 'es' && route === '/') {
          cy.contains('Encabezado').should('be.visible');
        }
      });
    });
  });
})