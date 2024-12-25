describe('Localization Tests', () => {
  const languages = {
    en: {
      heroText: "We engineer the future while being humans",
      langHeader: 'en'
    },
    es: {
      heroText: "Nosotros diseñamos el futuro mientras somos humanos.",
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
        cy.findByText(translations.heroText).should('exist');
      });
    });
  });

  context('Default Language', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it(`should display the title message in default language`, () => {
      cy.findByText(defaultLanguage.heroText).should('exist');
    });
  });
});
