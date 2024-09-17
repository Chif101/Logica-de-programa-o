// faça um algoritmo para verificar se o numero digitado pelo isuario é um numer primo
// 3/1= 0 3/2=N 3/3=0
// 4/1=0 4/2=0 4/3=N 4/4 = 0
//5/1=0 5/2=N 5/3=N 5/4=N 5/5 = 0

let numero, contador = 0

do{
numero = parseInt(prompt("digite um número para saber se ele é primo"))
if(numero<= 0 || isNaN(numero))
alert("digite um numero inteiro maior que 0")
}while (numero <= 0 || isNaN(numero));

for(let i = 1; i <= numero; i++){
    document.write(`${numero}%{i} = ${numero%i} <br> `)
    if(numero % i === 0){
        contador++
    }
    console.log(`Valor de i: ${numero}/${i}`)
}


if(contador === 2){
document.write(`o numero ${numero} é primo`)
}else{
    document.write(`o numero ${numero} não é primo`)
}