// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

let numero = parseInt(prompt("Digite qualquer número:"));

if (numero % 2 === 0) {
    alert("o número" + numero + "É PAR");
} else{
    alert( "o número" + numero + "É IMPAR")
}