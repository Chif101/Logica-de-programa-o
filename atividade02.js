let numero, i = 1

do{
    numero = parseInt(prompt("digite um numero"))
    if(isNaN(numero)  || (numero < 2 )){
        alert("digite um numero valido acima de 2")  
    }
} while((isNaN(numero)) || (numero < 2 ));

while(i !== numero){
    if(i%2 == 0){
    document.write(`${i}<br>`)
 }
 i++
}
