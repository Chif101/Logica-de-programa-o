let frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas[0]); //saída: 'maçã'
console.log(frutas[1]); // saída: 'banana'

frutas.push('uva');
console.log(frutas); //saída: ['maçã', 'banana', 'laranja', 'uva']

frutas.pop();
console.log(frutas) // saída: ['maçã', 'banana', 'laranja']

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

