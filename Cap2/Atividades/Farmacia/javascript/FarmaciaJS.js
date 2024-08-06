var inMedicamento = document.getElementById("inMedicamento");
var inPreco = document.getElementById("inPreco");
var outPromocao = document.getElementById("outPromocao");
var outPreco = document.getElementById("outPreco");

function mostrarDesconto() {
    var medicamento = inMedicamento.value;
    var preco = Math.trunc(inPreco.value);
    
    var desconto = preco * 2; // Você pode ajustar o cálculo do desconto conforme necessário.

    outPromocao.textContent = "Medicamento: "+ medicamento;
    outPreco.textContent = "Leve 2 por R$: " + desconto.toFixed(2);

}

var btMostrar = document.getElementById("btMostrarPromocao");
btMostrar.addEventListener("click", mostrarDesconto);
