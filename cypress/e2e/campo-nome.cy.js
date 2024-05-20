var faker = require('faker-br');

describe('Login - Caminho feliz', () => {
    var campo_nome = ':nth-child(3) > :nth-child(2) > .field > input'

    beforeEach(() => {
        cy.openForm()
    });

    it('Campo de nome com caracteres adequados', () => {
        const nome = faker.name.findName()

        cy.fillField(campo_nome, nome)
        cy.submitForm()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error').should('not.exist')

    });

    it('Campo de nome com números', () => {
        cy.fillField(campo_nome, '123456789')
        cy.submitForm()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.text', 'Caracteres numéricos não são aceitos neste campo')
    });

    it('Campo de nome com caracteres especiais', () => {
        cy.fillField(campo_nome, '!@#$%*()')
        cy.submitForm()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.text', 'Caracteres especiais não são aceitos neste campo')
    });

    it('Campo de nome com caracteres alfanuméricos e especiais', () => {
        cy.fillField(campo_nome, 'Maria 123!@#')
        cy.submitForm()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.text', 'Caracteres numéricos e especiais não são aceitos neste campo')
    });

    it('Campo de nome vazio', () => {
        cy.get('.button-register').click()
        cy.submitForm()

        cy.get(':nth-child(3) > :nth-child(2) > .field > .alert-error')
            .should('be.visible')
            .should('have.text', 'Informe o seu nome completo')
    });
});
