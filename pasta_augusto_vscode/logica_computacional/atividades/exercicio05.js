let num_op, pecas_op, num_maior, conta_m, conta_f, tot_pecas, cont, media_m, media_f, salario_maior, salario_op, tot_folha, sexo,op; 

tot_folhas = 0;
tot_pecas = 0;
media_m = 0;
media_f = 0;
cont_m = 0;
cont_f = 0;

for(cont = 1; cont <=1; cont++) {
    do{
       num_op = +prompt("Digite o número do " + cont + "ºoperário");
       if (num_op <=0 || isNaN(num_op))
       {
        alert("Número de operário inválido");
       } 
    } while (num_op <= 0 || isNaN (num_op));

    do{
        sexo_op = prompt("Dgite o sexo do operário (M ou F)").toUpperCase
    if(sexo_op !="M" || sexo_op !="F"){
        alert("Sexo do operario invalido")
    }    
    }while(sexo_op !="M" || sexo_op != "F")

    do{
        pecas_op = +prompt("digite o total de pelas fabricadas pelo"+ cont + "ºoperario")
        if(pecas_op <=0 || isNaN(pecas_op))
        alert("Número de peças invalido")
    } while (pecas_op <= 20) 

 if(pecas_op <= 20){
    console.log(salario_op);
} else if(pecas_op > 20 && pecas_op <30){
    salario_op = salario_op + (pecas_op - 20) * (3/100) * salario_op;
} else if(pecas_op >= 30){
    salario_op = salario_op + (pecas_op -20) * (3 / 100) *
    salario_op + (pecas_op - 30) * (5 / 100) * salario_op;
}

console.log("O operario de número" + num_op + "recebe salario .: " + salario_op)

tot_folha = tot_folha + salario_op
tot_pecas = tot_pecas + pecas_op
console.log(tot_folha)
console.log(tot_pecas)

if(sexo_op === "M" || sexo_op === "m"){
    media_m = media_m + pecas_op
    console.log(media_m)
    cont_m = conta_m + 1;

}else if(sexo_op ==="F" || sexo_op ==="f"){
    media_f = media_f + pecas_op
    console.log(media_f);
    conft_f = cont_f + 1;
}

if(cont === 1){
salario_maior= salario_op;
num_maior= num_op;
}else{
    if(salario_op > salario_maior){
        salario_maior= salario_op
        num_maior = num_op;
}
}

}