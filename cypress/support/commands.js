Cypress.Commands.add('openForm', () => {
    cy.visit('/')
    cy.contains('Quero ser Dog Walker').click()
})

Cypress.Commands.add('fillField', (field, fill) => {
    cy.get(field).type(fill)
})

Cypress.Commands.add('fillForm', () => {
    cy.fillField(Cypress.env('campos').campo_nome, Cypress.env('usuario').nome)
    cy.fillField(Cypress.env('campos').campo_email, Cypress.env('usuario').email)
    cy.fillField(Cypress.env('campos').campo_cpf, Cypress.env('usuario').cpf)
    cy.fillField(Cypress.env('campos').campo_cep, Cypress.env('usuario').cep)
    cy.get(':nth-child(2) > :nth-child(2) > input').click()
    cy.fillField(Cypress.env('campos').campo_numero, Cypress.env('usuario').numero)

    cy.get('input[type="file"]').selectFile('cypress/fixtures/rg.jpeg', { force: true })
})

Cypress.Commands.add('submitForm', () => {
    cy.get('.button-register').click()
})


// cy.intercept('GET', `**/${pessoa.cep}/json/`).as('getEndereco')
// cy.get(':nth-child(2) > :nth-child(2) > input').click()
// cy.wait('@getEndereco').its('response.statusCode').should('be.oneOf', [200, 400])