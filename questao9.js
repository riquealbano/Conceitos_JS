/*Escreva uma função que recebe um endereço de e-mail como argumento e retorna
true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
único símbolo '@' e pelo menos um ponto '.' após o '@'.*/

let validarEmail = (email) => {
    const arrobaIndex = email.indexOf('@')
    const pontoIndex = email.indexOf('.', arrobaIndex)
    return arrobaIndex !== -1 && pontoIndex !== -1 && arrobaIndex < pontoIndex;
  }
  console.log(validarEmail("exemplo@dominio.com"))
  console.log(validarEmail("exemplo@dominio"))