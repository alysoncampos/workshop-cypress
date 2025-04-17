import Login from "../support/pages/login"
import Home from "../support/pages/home"
import { gerarCredenciais } from "../support/utils"

describe('Página de Login - Serverest', () => {

  beforeEach(() => {
    // Arrange
    Login.visitarPagina()
  })

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    // Act
    Login.preencherCredenciais(Cypress.env('user_email'), Cypress.env('user_password'))
    Login.submeterFormulario()

    // Assert
    Home.validarAcessoAPagina()
  })

  it('Deve exibir mensagem de erro ao usar credenciais inválidas', () => {
    // Arrange
    const data = gerarCredenciais(Cypress.env('user_email'))

    // Act
    Login.preencherCredenciais(data.email, data.senha)
    Login.submeterFormulario()

    // Assert
    Login.validarMsgErroCredenciaisInvalidas()
  })

  it('Deve exibir mensagem de erro ao realizar login com senha inválida', () => {
    // Arrange
    const data = gerarCredenciais(Cypress.env('user_email'))

    // Act
    Login.preencherCredenciais(data.email, data.senha)
    Login.submeterFormulario()

    // Assert
    Login.validarMsgErroCredenciaisInvalidas()
  })

  it('Deve exibir mensagem de erro ao realizar login com senha inválida - Custom Command', () => {
    // Arrange
    cy.gerarCredenciais().then((data) => {

      // Act
      Login.preencherCredenciais(data.email, data.senha)
      Login.submeterFormulario()

      // Assert
      Login.validarMsgErroCredenciaisInvalidas()
    })
  })

  it.only('Deve exibir mensagem de erro ao tentar login com campos vazios', () => {
    // Act
    Login.submeterFormulario();
  
    // Assert
    Login.validarMsgErroCamposObrigatorios(); // Método para validar mensagem de erro
  });
})