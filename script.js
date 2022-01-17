
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

// console.log(inputAdultos,inputCriancas,inputDuracao);

function calcular() {
    console.log("Calculando...");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = (carnePP(duracao) * adultos + carnePP(duracao) * (criancas/2))/1000;
    let totalCerva = cervejaPP(duracao) * adultos/1000;
    let totalBebidas = (bebidasPP(duracao) * adultos + bebidasPP(duracao) * (criancas/2))/1000;


    resultado.innerHTML = `<p>${totalCarne}Kg de Carne </p> `
    resultado.innerHTML += `<p>${totalCerva}L de Cerveja </p> `
    resultado.innerHTML += `<p>${totalBebidas}L de Bebidas </p> `
    
    
    console.log(totalCarne + "Kg");

    // console.log(adultos,criancas,duracao);

}

function carnePP(duracao){
    if(duracao < 6){
        return 400;
    } else {
        return 650;
    }
}

function cervejaPP(duracao){
    if(duracao < 6){
        return 1200;
    } else {
        return 2000;
    }
}

function bebidasPP(duracao){
    if(duracao < 6){
        return 1000;
    } else {
        return 1500;
    }

}