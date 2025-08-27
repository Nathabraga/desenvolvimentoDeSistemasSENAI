var soma = 0
var contador = 1

while (contador <= 10) {
    var numero = Number(prompt("Qual o número?"))
    soma = soma + numero
    alert(`A soma parcial é: ${soma}`)
    contador++
}

alert(`A soma final é: ${soma}`)
