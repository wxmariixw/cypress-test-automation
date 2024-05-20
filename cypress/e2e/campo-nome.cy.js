var faker = require('faker-br');

describe('Login - Caminho feliz', () => {
    beforeEach(() => {
        cy.openForm()
    });

    it('Campo de nome com caracteres adequados', () => {
        const nome = faker.name.findName()

        cy.get(':nth-child(3) > :nth-child(2) > .field > input').type(nome)

        cy.get('.button-register').click()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error').should('not.exist')

    });

    it('Campo de nome com números', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('123456789')

        cy.get('.button-register').click()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.value', 'Caracteres numéricos não são aceitos neste campo')
    });

    it('Campo de nome com caracteres especiais', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('!@#$%*()')

        cy.get('.button-register').click()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.value', 'Caracteres especiais não são aceitos neste campo')
    });
});
