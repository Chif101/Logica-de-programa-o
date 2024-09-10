alert("digite 0 para sair do programa")
let numero;

do{
numero = parseInt(prompt("digite um número"))
debugger
if(numero === 0 || isNaN(numero)){
//confirmar a saida
    let sair = prompt("confirmar saida")
    if(sair){
        break
    }else{
        continue;
    }
}

if(numero%2 === 0 ) {
    alert(`o dobro do ${numero} é ${numero * 2}`);
} else {
    alert(` o triplo do ${numero} é: ${numero * 3}`);
}
alert("digite 0 para sair do programa")
} while (true);
