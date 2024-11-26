// Preenchendo os vetores X e Y com os números fornecidos
let X = [3, 8, 4, 2, 1, 6, 8, 7, 11, 9];
let Y = [2, 1, 5, 12, 3, 0, 1, 4, 5, 6];

// Verificando se os vetores têm o mesmo tamanho
if (X.length !== Y.length) {
    console.log("Os vetores não têm o mesmo tamanho.");
} else {
    // Criando um vetor para armazenar a soma dos vetores X e Y
    let soma = [];

    // Somando os elementos correspondentes dos vetores X e Y
    for (let i = 0; i < X.length; i++) {
        soma[i] = X[i] + Y[i];
    }

    // Exibindo o resultado
    console.log("Vetor X:", X);
    console.log("Vetor Y:", Y);
    console.log("Soma dos vetores X e Y:", soma);
}