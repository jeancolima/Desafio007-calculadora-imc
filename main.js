const seletorAltura = document.querySelector("#altura");
const visorAltura = document.querySelector(".valor-altura");
const seletorPeso = document.querySelector("#peso");
const visorPeso = document.querySelector(".valor-peso");
const btnCalcularIMC = document.querySelector(".btn-calculate");
const resultadoNumero = document.querySelector("#resultnumber");
const resultadoTexto = document.querySelector("#resulttext");
const itensTabela = document.querySelectorAll(".table ul li h2");

let altura;
let peso;

seletorAltura.addEventListener('input', () => {
    visorAltura.innerHTML = `${seletorAltura.value}cm`
})

seletorPeso.addEventListener('input', () => {
    visorPeso.innerHTML = `${seletorPeso.value}kg`
})

btnCalcularIMC.addEventListener("click", calculaIMC);

function calculaIMC() {
    altura = seletorAltura.value / 100;
    peso = seletorPeso.value;

    let imc = peso / (altura ** 2);

    mostraResultado(imc);
}

function mostraResultado(imc) {
    resultadoNumero.innerHTML = imc.toFixed(2);
    resultadoTexto.style.display = "block";

    if (imc > 0 && imc < 18.5) {
        resultadoTexto.innerHTML = "Abaixo do normal";
    } else if (imc > 18.5 && imc < 25) {
        resultadoTexto.innerHTML = "Normal";
    } else if (imc >= 25 && imc < 30) {
        resultadoTexto.innerHTML = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        resultadoTexto.innerHTML = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        resultadoTexto.innerHTML = "Obesidade grau II";
    } else if (imc >= 40) {
        resultadoTexto.innerHTML = "Obesidade grau III";
    }

    mudaResultadoTabela();
}

function mudaResultadoTabela() {
    itensTabela.forEach((e) => {
        e.parentNode.classList.remove("selecionado");
        if (resultadoTexto.innerHTML == e.innerHTML) {
            e.parentNode.classList.add("selecionado");
        }
    })
}