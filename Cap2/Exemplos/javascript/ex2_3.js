var inveiculo = document.getElementById("inVeiculo");
var inpreco = document.getElementById("inPreco");
var outveiculo = document.getElementById("outVeiculo");
var outEntrada = document.getElementById("outEntrada");
var outParcelas = document.getElementById("outParcela");

function calcularParcelas() {
    var veiculo = inveiculo.value;
    var preco = Number(inpreco.value);
    var entrada = preco * 0.50;
    var parcelas = (preco - entrada) / 12;

    outVeiculo.textContent = veiculo;
    outEntrada.textContent = "Entrada de R$ " + entrada.toFixed(2);
    outParcelas.textContent = "12x de R$ " + parcelas.toFixed(2);
}

var btverPromocao = document.getElementById("btVerPromocao")
btverPromocao.addEventListener("click", calcularParcelas);