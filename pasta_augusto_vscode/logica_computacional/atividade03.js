let qtdChinchilas, anosFazenda
let totalChinchilas = 1 

do{
    qtdChinchilas = parseInt(prompt("digite a quantidade de chinchilas"))
    if(qtdChinchilas < 2 || isNaN(qtdChinchilas)){
        alert("número de chinchilas deve ser maior ou igual a 2")
    }
}while(qtdChinchilas < 2 || isNaN(qtdChinchilas));

do{
    anosFazenda = parseInt(prompt("digite por quantos anos você irá criar Chinchilas"))
    if(anosFazenda < 1 || isNaN(anosFazenda)){
        alert("tempo de criação inválido")
    }
} while(anosFazenda < 1 || isNaN(anosFazenda));

document.write(`quantidade Chinchilas: ${qtdChinchilas}, tempo de crianção: ${anosFazenda}`)

totalChinchilas = qtdChinchilas

for(let i = 2; i <= anosFazenda; i++){
//document.write("<br>"+i)
totalChinchilas = totalChinchilas   * 3
//totalchichilas *= 3
document.write("<br>"+totalChinchilas)
}

document.write(`Ao final de ${anosFazenda} você irá ter o total ${totalChinchilas} chinchilas`)