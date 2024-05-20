Cypress.Commands.add('openForm', () => {
    cy.visit('/')
    cy.contains('Quero ser Dog Walker').click()
})

Cypress.Commands.add('fillField', (field, fill) => {
    cy.get(field).type(fill)
    cy.get('.button-register').click()
})

Cypress.Commands.add('fillForm', (pessoa) => {
    const campo_nome = ':nth-child(3) > :nth-child(2) > .field > input'
    const campo_email = ':nth-child(3) > :nth-child(1) > input'
    const campo_cpf = ':nth-child(3) > :nth-child(2) > input'
    const campo_cep = ':nth-child(4) > :nth-child(2) > :nth-child(1) > input'
    const campo_numero = ':nth-child(4) > :nth-child(1) > input'
    
    cy.fillField(campo_nome, pessoa.nome)
    cy.fillField(campo_email, pessoa.email)
    cy.fillField(campo_cpf, pessoa.cpf)
    cy.fillField(campo_cep, pessoa.cep)
    cy.fillField(campo_numero, pessoa.numero)

    cy.get('input[type="file"]').selectFile('cypress/fixtures/rg.jpeg', { force: true })
})

Cypress.Commands.add('submitForm', () => {
    cy.intercept('POST', `https://jsonplaceholder.typicode.com/posts`).as('postRegister')
    cy.get('.button-register').click()
    cy.wait('@postRegister').its('response.statusCode').should('be.equal', 201)
})


// cy.intercept('GET', `**/${pessoa.cep}/json/`).as('getEndereco')
// cy.get(':nth-child(2) > :nth-child(2) > input').click()
// cy.wait('@getEndereco').its('response.statusCode').should('be.oneOf', [200, 400])