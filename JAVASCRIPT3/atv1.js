function atv1()
{
    var filmes = [];
    console.log(filmes)
    filmes [0]="Frozen"
    filmes [1]= "Velozes e Furiosos"
    filmes [2]= "A princesa e o sapo"
    console.log(filmes)
}
function atv2()
{
    var numeros = []
    console.log(numeros)
    for(i=0; i <=2 ; i++){
         var numero = Number(prompt(`Digite o seu ${i + 1}º número:`));
         numeros.push(numero)
}

for(i = 2; i >= 0; i-- ){

console.log(numeros[i])

}

}   