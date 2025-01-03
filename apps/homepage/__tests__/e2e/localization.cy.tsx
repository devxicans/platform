describe('Localization Tests', () => {
  const languages = {
    en: {
      homeLink: "Home",
      langHeader: 'en'
    },
    es: {
      homeLink: "Inicio",
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
        cy.findByText(translations.homeLink).should('exist');
      });
    });
  });

  context('Default Language', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`should display the title message in default language`, () => {
      cy.findByText(defaultLanguage.homeLink).should('exist');
    });
  });
});
