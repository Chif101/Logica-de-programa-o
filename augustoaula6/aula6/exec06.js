let salario, novoSalario, anoAtual, percentual

salario = Number(prompt("Digite o salário"))
anoAtual = Number(prompt("Digite o ano atual: "))

document.write(`<h3> Salario 2005: ${salario}</h3>`)

//processmento
percentual = 1.5/100
novoSalario = salario + (percentual * salario)
document.write(`<h1>salário 2006: ${novoSalario}</h3>`)

for(let i = 2007; i <= anoAtual; i++){
    percentual = percentual * 2
    novoSalario = salario + (percentual * salario)
document.write(`<h1>salário ${i}: ${novoSalario}</h3>`)
}

document.write(`<h3 class ="sfinal">salário Final: ${novoSalario.toFixed(2)}</h3>`);

