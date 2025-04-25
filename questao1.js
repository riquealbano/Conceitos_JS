/*Escreva um programa que declare duas variáveis numéricas e realize as quatro
operações matemáticas básicas (+, -, *, /). Imprima os resultados no console.*/

let num1 = 10
let num2 = 5

console.log(`Soma: ${num1 + num2}`)
console.log(`Subtração: ${num1 - num2}`)
console.log(`Multiplicação: ${num1 * num2}`)
console.log(`Divisão: ${num1 / num2}`)


void proximo() {
    if (primeiro != null) {
        NoMusicaDuplo temp_no = primeiro;
        for (int i = 0; i < indice && temp_no != null; i++) {
            temp_no = temp_no.prox;
        }

        if (temp_no != null && temp_no.prox != null) {
            temp_no = temp_no.prox;
            indice++;
            System.out.println("Próxima música: " + temp_no.musica.titulo);
        } else {
            System.out.println("Não há próximo nó ou já estamos no final da lista.");
        }
    }
}
