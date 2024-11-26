// Preenchendo os vetores X e Y com os números fornecidos
let X = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9];
let Y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6];

// Combinando os vetores X e Y
let combinados = [...X, ...Y];  // Usando o spread operator para combinar os vetores

// Removendo as repetições usando Set
let semRepeticao = [...new Set(combinados)];

// Exibindo os vetores sem repetições
console.log("Vetor X:", X);
console.log("Vetor Y:", Y);
console.log("Vetor combinado sem repetições:", semRepeticao);