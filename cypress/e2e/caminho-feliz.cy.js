var faker = require('faker-br');

describe('Login - Caminho feliz', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Quero ser Dog Walker').click()
    });

    it('Realizar cadastro com sucesso', () => {
        const pessoa = generateData()
        
        cy.fillForm(pessoa)

        cy.intercept('POST', `https://jsonplaceholder.typicode.com/posts`).as('postRegister')
        cy.submitForm()
        cy.wait('@postRegister').its('response.statusCode').should('be.equal', 201)
        
    });
});

function generateData() {
    const pessoa = {
        nome: faker.name.findName(),
        email: faker.internet.email(),
        cpf: faker.br.cpf(),
        cep: faker.address.zipCodeValid(),
        numero: 123
    };
    return pessoa
}