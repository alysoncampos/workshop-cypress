import { elements as el } from './elements'

class Home {

    realizarLogout() {
        cy.get(el.logoutBtn).should('be.visible').click()
    }

    validarAcessoAPagina() {
        cy.url().should('eq', 'https://front.serverest.dev/home')
    }
}

export default new Home()