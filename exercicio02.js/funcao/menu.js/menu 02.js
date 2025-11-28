//1
function name(params) {
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
}

//2
function name(params) {
  // Imprimir números pares de 0 a 20 utilizando o loop while
}
let numero = 0; //inicializado

//condicao
while (numerp<=20){
    //so entra no corp[o se a condicao for verdadeira
    console.log(numero);
    // numero = numero + 2;
    numero += 2; //soma de 2 em 2, ou seja,somente numeros pares  
}

//3
function name(params) {
    // Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numeroEscolhido = prompt ("digite um numero positivo:")


while (numeroEscolhido > -1) {
  //so entra no while se a condicao for verdadeirio

  console.log(numeroEscolhido);
  numeroEscolhido = numeroEscolhido -1;
  numeroEscolhido--; //decrementa o valor escolhido, ou seja, faz a contagem regressiva
}
    
}

//4
function name(params) {
    // Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numeroEscolhido = prompt ("digite um numero:");

while (numeroescolhida  != 0) {
    numeroEscolhida = prompt ("por favor digite novamente um numero");
    

}
}

//5
function name(params) {
    // Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1; //variavel inicializadora
  let soma = 0;

while (numero <= 100) {
   soma = soma + numero; // esta somando os numeros
   numero ++; //incremento de cada volta
}

alert("a soma dos numeros de 1 a 100 e:" + soma);
}

//6

let primeironumero = parseInt(prompt("digite o primeiro numero:"));
let segundonumero = parseint(prompt("digite o segundo numero:"));
let terceironumero =  parseint(prompt("digite o terceiro numero:"));

 console.log(primeironumero);
 console.log(segundonumero);
 console.log(terceironumero);
// 1 2 3 - crescente
 // ultizamos o if toda vez que precisamos conferir algo
 if (primeironumero < segundonumero && segundonumero < terceironumero) {
    //so entra nesse se for verdadeiro
    alert ("esta em ordem crescente.")
    console.log ("O primeiro: " + primeironumero +"numero digitado e menor que o segundo:" + segundoprimeiro)
        
        
 }
 // 3 2 1
 // verificar o decrescente
if (primeironumero > segundonumero && segundonumero >terceironumero){
    alert("esta em ordem decrescente")
}

 //verificar o aleatoria
 else {
 alert ("os numeros estao em ordem aleatoiria")
 }

 