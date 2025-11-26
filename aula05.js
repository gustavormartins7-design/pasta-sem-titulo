// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não



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
 else (segundoprimeiro <= segundonumero && segundonumero >= terceironumero)
 alert ("os numeros estao em ordem aleatoiria")