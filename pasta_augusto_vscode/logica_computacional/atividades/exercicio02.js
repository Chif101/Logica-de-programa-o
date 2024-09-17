let numero, 
 numeroPerfeito = 0;
// 6 ||6/1 = 0 ||6/2 = 0 ||6/3 = 0|| 6/4=N ||6/5=N ||6/6 = 0||


do{
numero = parseInt(prompt("digite um número para saber se ele é um número perfeito"))
if(numero<= 0 || isNaN(numero))
alert("número digitado invalido")
}while (numero <= 0 || isNaN(numero));

for(let i =1; 1 < numero; i++){
if(numero % i === 0){
    numeroPerfeito = numeroPerfeito + i
}
}

if(numeroPerfeito === numero){
    document.write(`O número ${numero} é um número perfeito.`)
}else{
    document.write(`O número ${numero} não é um número perfeito.`)
}