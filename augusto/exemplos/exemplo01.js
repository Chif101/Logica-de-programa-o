let tempoAnual = []
let mediaTemp, acumuladora = 0
//1º armazenar dados na estrutura de dados => array(vetor)
for(let i = 0; i < 12; i++){
tempoAnual[i] = Number(prompt("digite a temperatura do mês"))
}
mediaTemp = tempoAnual / 12
console.log(typeof tempoAnual) // objeto
console.log(typeof 12) // number
console.log(mediaTemp)

document.write(`<p>TempAnual; ${tempoAnual}</p> `)
//document.write(`<p> Mediatemp${}</p>`)

//2º mostrar/processar as informções do array de forna individual
//for(let i = 0; i< 12; i++){
//acumuladora = acumuladora + tempoAnual[i]
//}