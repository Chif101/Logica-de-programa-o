let numero, tabuada;
debugger;

numero = parseInt(prompt("Digite um número:"))

for(let i = 1; i < 11; i++){
    tabuada = numero * i + "\t"
    document.write(`${numero} x ${i} = ${tabuada} \n`)
}