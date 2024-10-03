let numero, e, fatorial = 1;

numero = Number(prompt("Digite um numero"))

e = 1
for(let i = 1; i <= numero; i++){
 // fat = 1 * 1
 // fat = 1 * 2
 // fat = 1 * 3
 fatorial = 1
    for(let j = 1; j <= i; j++){
        fatorial = fatorial * j
  }

   e = e + 1 / fatorial
}

document.write(`Valor final de E = ${e}`)