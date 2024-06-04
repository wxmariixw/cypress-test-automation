describe('Validações do campo de nome', () => {
    beforeEach(() => {
        cy.openForm()
    });

    it('Campo de nome com caracteres adequados', () => {
        cy.fillField(Cypress.env('campo').campo_nome, Cypress.env('usuario').nome)
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
