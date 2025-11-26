alert("inforrme ás notas de 0 a 10")

let nota1= parselfloat(prompt ("digite a primeira nota:"))
let nota2= parselfloat(prompt ("digite a primeira nota:"))
let nota3= parselfloat(prompt ("digite a primeira nota:"))
let nota4= parselfloat(prompt ("digite a primeira nota:"))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log ("A média do aluno é:" + media)

if(media >= 7){
    console.log ("aprovado")
}
else if(media<7 && media>=5){
    console.log("recuperação")
}
else {
    console.log ("reprovando ;-;")
}