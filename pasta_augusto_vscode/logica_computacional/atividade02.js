//variaveis contadora, acumuladoras = iniciadas com o valor 0
//1º variavel++, variavel-- 
//2º variavel - variavel + acumular

let nomeConta,valorConta
let qtdConta = 0, valorTotal = 0
let i = 1

while(i !== 0){
    do{
        nomeConta = prompt("qual conta ira pagar")
       if(nomeConta === ''){
        alert("A conta precisa de uma descrição, Digite novamente")
       }
    }while (nomeConta === '') 

    do{
        valorConta = parseInt(prompt(`digite o valor da conta ${nomeconta}:`));
        if(valorConta === 0 || isNaN(valorConta)){
        alert("o valor da conta precisa ser números")
    }
 }while (valorConta === 0 || isNaN(valorconta));

qtdConta++
valorTotal = valorTotal + valorConta

document.write(`<h4>${nomeConta} \t\t---------\t\t ${valorconta}</h4>`)
i = parseInt(prompt("digite 1 para continuar cadastrando e 0 para sair"))
}
document.write(`<h3>quantidade de contas: ${qtdConta}--------${valorTotal}</h3>`)