// Função para preencher um vetor com números inteiros aleatórios
function preencherVetor(tamanho) {
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        // Preenche o vetor com números inteiros aleatórios entre 0 e 10
        vetor.push(Math.floor(Math.random() * 11));
    }
    return vetor;
}

// Função para calcular a soma dos vetores X e Y
function somarVetores(vetorX, vetorY) {
    let vetorSoma = [];
    for (let i = 0; i < vetorX.length; i++) {
        vetorSoma.push(vetorX[i] + vetorY[i]);
    }
    return vetorSoma;
}

// Preencher os vetores X e Y com 10 números inteiros aleatórios
let X = preencherVetor(10);
let Y = preencherVetor(10);

// Calcular a soma dos vetores X e Y
let soma = somarVetores(X, Y);

// Exibir os resultados
console.log("Vetor X:", X);
console.log("Vetor Y:", Y);
console.log("Soma de X e Y:", soma);