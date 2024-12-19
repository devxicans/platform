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

// describe('Dynamic Content Localization Tests', () => {
//   const locales = ['en', 'es'];

//   locales.forEach((locale) => {
//     it(`should display dynamic content correctly in ${locale}`, () => {
//       cy.visit(`/${locale}`);

//       if (locale === 'en') {
//         cy.findByText('Header').contains('Submit').should('be.visible');
//       } else if (locale === 'es') {
//         cy.get('button').contains('Enviar').should('be.visible');
//       } else if (locale === 'fr') {
//         cy.get('button').contains('Soumettre').should('be.visible');
//       }

//       if (locale === 'en') {
//         cy.get('h1').contains('Welcome to our site').should('be.visible');
//       } else if (locale === 'es') {
//         cy.get('h1').contains('Bienvenido a nuestro sitio').should('be.visible');
//       } else if (locale === 'fr') {
//         cy.get('h1').contains('Bienvenue sur notre site').should('be.visible');
//       }
//     });
//   });
// });