describe('Localization Tests', () => {
  const languages = {
    en: {
      title: 'HomePage',
      langHeader: 'en'
    },
    es: {
      title: 'Pagina Principal',
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
    });
  });

  context('Default Language', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`should display the title message in default language`, () => {
      cy.findByText(defaultLanguage.title).should('exist');
    });
  });
});
