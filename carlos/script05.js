// Preenchendo os vetores X e Y com os números fornecidos
let X = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9];
let Y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6];

// Criando Sets a partir dos vetores X e Y para eliminar duplicatas e facilitar a operação
let setX = new Set(X);
let setY = new Set(Y);

// Encontrando a interseção entre os Sets X e Y
let interseccao = [...setX].filter(num => setY.has(num));

// Exibindo o resultado
console.log("Vetor X:", X);
console.log("Vetor Y:", Y);
console.log("Números que aparecem em ambos os vetores (sem repetições):", interseccao);