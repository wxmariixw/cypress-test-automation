

describe('Login - Caminho feliz', () => {
    beforeEach(() => {
        cy.openForm();
    });

    it('Realizar cadastro com sucesso', () => {        
        cy.fillForm();

        cy.intercept('POST', `https://jsonplaceholder.typicode.com/posts`).as('postRegister');
        cy.submitForm();
        cy.wait('@postRegister').its('response.statusCode').should('be.equal', 201) 
    });
});