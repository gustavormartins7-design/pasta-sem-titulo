// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let tabuadaescolhida =  parseInt(prompt("digite um numero de uma tabuada desejada:"));

// 2 x 1 =2
// 2 x 2 =4
// 2 x 3 =6
// 2 x 4 =8
// 2 x 5 =10

// 1 numero dentro da condficao do for - inicializando - variavel
// 2 numero dentro da condicao do for - condicao - a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// (i ++ igual a i = i+1)
console.log ('====TABUADA S (tabuadaEscolhida) =====');
for (let i = 1; i <= 10; 1 ++) {
    //     2 x 4 =
    console.log (tabuadaescolhida + "x" + i + " = " + (tabuadaescolhida * i));

}