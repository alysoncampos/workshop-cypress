import { faker } from '@faker-js/faker';

Cypress.Commands.add('gerarCredenciais', (email, senha) => {
    email = email || faker.internet.email()
    senha = senha || faker.internet.password(8)
    cy.wrap({ email, senha })
});