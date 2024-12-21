import { defineConfig } from "cypress";

const baseConfig = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    supportFile: '../../cypress/support/e2e.js',
    supportFolder: '../../cypress/support',
    specPattern: '__tests__/e2e/**.cy.{ts,tsx}'
  }
});

export default baseConfig;
