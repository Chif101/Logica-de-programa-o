//for(){

    //for(){

    //}

//}

let qtdNumero, numeroEscolhindo, fatorial = 1;

do{
    qtdNumero = parseInt(prompt("quantos números fatorias você deseja saber?"))
    if(qtdNumero <=0 || isNaN(qtdNumero)){
        alert("numero invalido")

    }
}while(qtdNumero <=0 || isNaN(qtdNumero));

debugger
for(let i = 0; i<= qtdNumero; i++){

do {
    numeroEscolhindo = parseInt(prompt(`digite p ${i}º numero para saber o fatorial`))

    if(numeroEscolhindo <= 0 || isNaN(numeroEscolhindo)){
    alert("número inválido");
}
}while (numeroEscolhindo <= 0 || isNaN(numeroEscolhindo))

fatorial = 1
for(let y = 1; y <= numeroEscolhindo; y++){
fatorial = fatorial * y
}
document.write(`fatorial de ${numeroEscolhindo} é ${fatorial} <br>`)
}