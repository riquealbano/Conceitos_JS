/*Escreva uma função que verifique se uma determinada string é um palíndromo (ou
seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
para a esquerda).
    Exemplo: arara*/

function verificarPalindromo(str) {
    const strLimpa = str.toLowerCase().replace(/\s/g, '')
    return strLimpa === strLimpa.split('').reverse().join('')
}
console.log(verificarPalindromo("arara"))   
console.log(verificarPalindromo("exemplo")) 
console.log(verificarPalindromo("subi no onibus"))
    