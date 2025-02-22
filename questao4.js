/*Faça um programa que recebe o nome de uma variável e mostre o
<<primeiro>>.<<último nome>>@facens.br

Por exemplo:
A variável nome possui o conteúdo “Edson Martin Feitosa”.
Deve mostrar edson.feitosa@facens.br*/

let gerarEmail = (nomeCompleto) => {
    let nomes = nomeCompleto.split(" ")
    let primeiroNome = nomes[0]
    let ultimoNome = nomes[nomes.length - 1]

    return `${primeiroNome}.${ultimoNome}@facens.br`
}

console.log(gerarEmail("Henrique Serafim Albano"));