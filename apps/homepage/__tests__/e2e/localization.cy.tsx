describe('Localization Tests', () => {
  const languages = {
    en: {
      title: 'HomePage',
      header: 'Header',
      langHeader: 'en'
    },
    es: {
      title: 'Pagina Principal',
      header: 'Encabezado',
      langHeader: 'es'
    }
  };

  const defaultLanguage = languages.en;

  Object.entries(languages).forEach(([lang, translations]) => {
    context(`Language: ${lang}`, () => {
      beforeEach(() => {
        cy.visit('/', {
          headers: {
            'Accept-Language': translations.langHeader
          }
        });
      });

      it(`should display the title message in ${lang}`, () => {
        cy.findByText(translations.title).should('exist');
      });

      it(`should display the header message in ${lang}`, () => {
        cy.findByText(translations.header).should('exist');
      });
    });
  });

  context('Default Language', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`should display the title message in default language`, () => {
      cy.findByText(defaultLanguage.title).should('exist');
    });

    it(`should display the header message in default language`, () => {
      cy.findByText(defaultLanguage.header).should('exist');
    });
  });
});
