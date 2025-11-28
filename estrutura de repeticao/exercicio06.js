// Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1; //variavel inicializadora
  let soma = 0;

while (numero <= 100) {
   soma = soma + numero; // esta somando os numeros
   numero ++; //incremento de cada volta
}

alert("a soma dos numeros de 1 a 100 e:" + soma);