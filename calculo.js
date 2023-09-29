//calculadora de idade
function idade(){
    let anoDeNascimento = parseInt(prompt("Em que ano você nasceu?"));
    let idade = 2023 - anoDeNascimento;
    alert("Quem nasceu em " + anoDeNascimento + " vai fazer " + idade + " em 2023.");
}
//calculadora de notas
function notas(){
let nota1 = parseFloat(prompt("Digite a nota do primeiro trimestre: "));
let nota2 = parseFloat(prompt("Digite a nota do segundo trimestre: "));
let nota3 = parseFloat(prompt("Digite a nota do terceiro trimestre: "));

let resultado = nota1 + nota2 + nota3;

if(resultado >= 180){
    alert("aprovado!");
} else {
    alert("reprovado!");
}
}