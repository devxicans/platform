describe('Localization Tests', () => {
  const languages = {
    en: {
      title: 'HomePage',
      header: 'Header'
    },
    es: {
      title: 'Pagina Principal',
      header: 'Encabezado'
    }
  };

  Object.keys(languages).forEach(lang => {
    context(`Language: ${lang}`, () => {
      beforeEach(() => {
        cy.visit('/', {
          headers: {
            'Accept-Language': lang
          }
        });
      });

      it(`should display the title message in ${lang}`, () => {
        cy.get('[data-testid=title]').should('contain', languages[lang].title);
      });

      it(`should display the header message in ${lang}`, () => {
        cy.get('[data-testid=header]').should('contain', languages[lang].header);
      });
    });
  });
});