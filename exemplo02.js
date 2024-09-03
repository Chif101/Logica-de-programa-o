let numero

numero = parseInt(prompt("Digite um número"))

for(let i = 1; numero != 0;){
    document.write(`${numero} \n`)
    numero = numero - i
}