// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let informensualidade = parseInt (prompt ("qual e sua idade ?"))

while (informesualidade <18) {

    informesualidade = parseInt (prompt ("qual e a sua idade ?"))

}
if(informesualidade >= 18){
alert ("voce e maior de 18 anos !!!")
}