  function exibirTabuadaEscolhidas(){
let tabuadaescolhida =  parseInt(prompt("digite um numero de uma tabuada desejada:"));


console.log ('====TABUADA S (tabuadaEscolhida) =====');

// 2 x 1 =2
// 2 x 2 =4
// 2 x 3 =6
// 2 x 4 =8
// 2 x 5 =10
}

// 1 numero dentro da condficao do for - inicializando - variavel
// 2 numero dentro da condicao do for - condicao - a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// (i ++ igual a i = i+1)
console.log ('====TABUADA S (tabuadaEscolhida) =====');
for (let i = 1; i <= 10; 1 ++) {
    //     2 x 4 =
    console.log (tabuadaescolhida + "x" + i + " = " + (tabuadaescolhida * i));


}
//chama a minha funcao
// exibirTabuadaEscolhida ();
//cie uma funcao  para que solicite o nome da pessoa e exiba-o

function exibirNomeSolicitando (){
    let nomeSolicitado = prompt ("digite seu nome")
    return nomeSolicitado;

}

//  let nome = exibirNomesSolicitado()

//  alert (nome);

 function somardoisnumeros(numero1, numero2) {
    console.log(numero1+numero2);
 }
 somardoisnumeros(10,40)
 // crie funcao para exercicio 08 de estrutura condicional
 // passe via parametro o peso e a altura

 function calcularIMC(peso, altura) {
    let informensualidade = parseInt (prompt ("qual e sua idade ?"))
 }
while (informesualidade <18) {

    informesualidade = parseInt (prompt ("qual e a sua idade ?"))

}
if(informesualidade >= 18){
alert ("voce e maior de 18 anos !!!")
    
 }
 let pesodigitando = parseFloat(prompt("digite seu peso em quilogramas"))
 let alturadigitado= parseFloat(prompt("digite sua altura:"))
  let IMC = pesoDigitando / (alturaDigitado * alturaDigitado)

if (INC< 18,5) {
    alert("abaixo do peso");

}
else if (IMC >= 18.5 && IMC <= 24,9){
    alert("peso normal")

}
else if (IMC >= 25&& IMC <=29,9){
alert("sobrepeso")
}
else if (IMC<= 30,0 && IMC <= 34.9) {
 alert ("obesidade grau 2");

} else ("obesidade grau 3. se cuide por favor, sua vida esta em risco");
