import { faker } from '@faker-js/faker';

export function gerarCredenciais(email, senha) {
    return {
        email: email || faker.internet.email(),
        senha: senha || faker.internet.password(8)
    }
}