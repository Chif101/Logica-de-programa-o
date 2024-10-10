let soma = 0
let numeros = [];

soma = numeros++

    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        soma += numero;
}

console.log(`A soma dos números é: ${soma}`);


