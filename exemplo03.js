// elabore um program que leia m número e 
// apresentar a tabuada desse número
let numero, tabuada
numero = Number(prompt("digite um número "))

for(let i = 1; i <= 10; i++){
    tabuada = numero * i
    document.write(`${numero} x ${i} = ${tabuada} <br>`)
}