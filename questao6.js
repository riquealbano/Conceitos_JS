/*Faça uma função que mostre o dobro do número passado. Caso o número seja menor
ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que
zero”.*/

let dobrar = (numP) => {
    if (numP<=0){
        return ("Só é aceito números positivos maiores que zero")
    } else {
        return numP*2
    }
}
console.log(dobrar(5))
console.log(dobrar(-1))