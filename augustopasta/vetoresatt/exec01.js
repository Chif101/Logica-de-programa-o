let n 
numeros = [];

n = Number(prompt("Digite a quantidade de números"))

for(let i = 0; i< n; i++){
numeros[i] = Number(prompt("digite o número"));
}

document.write(`numeros; ${numeros}`)