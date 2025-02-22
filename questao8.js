/*Escreva uma função que recebe uma string como argumento e retorna o número de
vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).*/

let contarVogais = (str) => {
    let contador = 0
    for (let i = 0; i < str.length; i++) {
      if ('aeiou'.includes(str[i])) {
        contador++
      }
    }
    return contador
  }
  console.log(contarVogais("sera que funciona"))
  