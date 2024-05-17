Cypress.Commands.add('fillForm', (pessoa) => {
    cy.get(':nth-child(3) > :nth-child(2) > .field > input').type(pessoa.nome)
    cy.get(':nth-child(3) > :nth-child(1) > input').type(pessoa.email)
    cy.get(':nth-child(3) > :nth-child(2) > input').type(pessoa.cpf)
    cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type(pessoa.cep)
    cy.intercept('GET', `**/${pessoa.cep}/json/`).as('getEndereco')
    cy.get(':nth-child(2) > :nth-child(2) > input').click()
    cy.wait('@getEndereco').its('response.statusCode').should('be.oneOf', [200, 400])
    cy.get(':nth-child(4) > :nth-child(1) > input').type(pessoa.numero)
    cy.get('input[type="file"]').selectFile('cypress/fixtures/rg.jpeg', { force: true })
})

Cypress.Commands.add('submitForm', () => {
    cy.intercept('POST', `https://jsonplaceholder.typicode.com/posts`).as('postRegister')
    cy.get('.button-register').click()
    cy.wait('@postRegister').its('response.statusCode').should('be.equal', 201)
})