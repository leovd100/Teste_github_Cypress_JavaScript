/// <reference types="cypress" />


before( ()=>{
    cy.visit('https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')

})

describe('Cadastro' ,()=>{


    it('Teste de username', () =>{
        cy.get('#user_login').type('user09tstcsharp').should('have.value','user09tstcsharp')
    })
    
    it('Este é o segundo it', () => {
        cy.get('#user_email').type('teste_user09tstcsharp@gmail.com').should('have.value','teste_user09tstcsharp@gmail.com')
    })

    it('Senha',() =>{
        cy.get('#user_password').type('Teste1345%')
    })

    describe('Checkbox', () =>{
        it('descicao',()=>{

            cy.get('#all_emails').click()

        })


    })

})

