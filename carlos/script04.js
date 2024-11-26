// Preenchendo os vetores X e Y com os números fornecidos
let X = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9];
let Y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6];

// Criando um Set para Y para facilitar a verificação de existência
let setY = new Set(Y);

// Filtrando os elementos de X que não existem em Y
let resultado = [...new Set(X.filter(num => !setY.has(num)))];

// Exibindo o resultado
console.log("Vetor X:", X);
console.log("Vetor Y:", Y);
console.log("Números do vetor X que não existem em Y (sem repetições):", resultado);