var inValor = document.getElementById("inValor");
var inTempoDeUso = document.getElementById("inTempoDeUso");
var outSaida = document.getElementById("outSaida");

function calcular() {
    var Valor = Number(inValor.value);
    var TempoDeUso = Number(inTempoDeUso.value);

    var ValorAPagar = (Math.ceil(TempoDeUso/15)) * Valor;

    outSaida.textContent = "Valor a pagar R$: " + ValorAPagar.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);