/*Escreva uma função que receba uma string como argumento e retorne a string
invertida.*/

let invertePalavras = (word) => {
    if(Text.length(word)<=1){
        return ('não foi possivel inverter pois só há uma letra')
    } else {
        return word.split('').reverse().join('');
    }
}
console.log(invertePalavras('abacaxi'))
console.log(invertePalavras('h'))