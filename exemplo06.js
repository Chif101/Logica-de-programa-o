let numero1, numero2, validacao
//isNan -> verificar o que foi digitado (texto)
//numero1 = `t`

//if(inNaN(numero1)){
    //console.log("digite um número válido")
//}

//console.log(numero1)

do {
    numero1 = parseInt(prompt("digite 1º número"))
   if(isNaN(numero1)  || numero1 < 0)
   alert("numer invalido, digite um valor postivo e maior que 0")
} while(isNaN(numero1)  || (numero1 < 0));

do {
    numero2 = parseInt(prompt("digite 2º numero"))
    if(isNaN(numero2)  || numero2 < 0 ) {
        alert("número inválido, digite um valor positivo e maior que 0")
    }
}while (isNaN (numero2) || numero2 < 0);

console.log(numero1+numero2)