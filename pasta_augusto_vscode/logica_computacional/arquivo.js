//1º maneira 
//let numero = 1

//while(numero != 0){
    //alert("entrou no laço")
    //numero = parseInt(prompt("Digite 0 para sair"))
//}

//2º maneira - continue - break
// continue -> faz um nnove teste lógico
// break -> finaliza a estrutura de repetição
//for(let i = 0; i<=10; i++){
//if(i === 5 || i === 8){
    //continue
//}

//if(i === 7){
  //  break
//}
    //console.log("i; "+i)
//}

//variaveis contadora, acumuladoras = iniciadas com o valor 0
//1º variavel++, variavel-- 
//2º variavel - variavel + acumular
let nomeConta,valorConta
let qtdConta = 0, valorTotal = 0
let i = 1

while(i !== 0){
    do{
        nomeConta = prompt("qual conta ira pagar")
       if(nomeConta === ``){
        alert("A conta precisa de uma descrição, Digite novamente")
       }
    }while (condition) 

valorConta = parseInt(prompt(`digite o valor da conta de ${nomeConta}: `))
}

