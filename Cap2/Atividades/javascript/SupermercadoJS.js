var inProduto = document.getElementById("inProduto");
var inPreco = document.getElementById("inPreco");
var outPromocao = document.getElementById("outPromocao");
var outDesconto = document.getElementById("outDesconto");

function calcularPromocao() {
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var promocao = preco * 2.5;
    var desconto = preco * 0.5;

    outPromocao.textContent = "Promoção de " + produto + " - Leve 3 por R$: " + promocao.toFixed(2);
    outDesconto.textContent = "O terceiro item custa apenas R$: " + desconto.toFixed(2);
}

var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", calcularPromocao);
