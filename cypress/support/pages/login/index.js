import { elements as el } from "./elements"

class Login {
    visitarPagina() {
        cy.visit('https://front.serverest.dev/login')
    }

    preencherCredenciais(email, senha) {
        cy.get(el.email).type(email)
        cy.get(el.senha).type(senha, { log: false })
    }

    submeterFormulario() {
        cy.get(el.loginBtn).click()
    }

    validarMsgErroCredenciaisInvalidas() {
        cy.contains('Email e/ou senha inválidos')
            .should('be.visible')
    }

    validarMsgErroCamposObrigatorios() {
        cy.contains('Email é obrigatório')
            .should('be.visible');
        cy.contains('Password é obrigatório')
            .should('be.visible');
    }

    validarPermanenciaNaTelaDeLogin() {
        cy.url()
            .should('eq', 'https://front.serverest.dev/login'); // Verifica se a URL ainda é a da tela de login
        cy.get(el.email)
            .should('be.visible'); // Verifica se o campo de e-mail ainda está visível
        cy.get(el.senha)
            .should('be.visible'); // Verifica se o campo de senha ainda está visível
    }

    
}

export default new Login()