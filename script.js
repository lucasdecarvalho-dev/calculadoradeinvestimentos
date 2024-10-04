var n = 1;
var quantidadeTotal = 0;

function adicionar() {
    n++;
    let novaPeca = document.createElement("div");
    novaPeca.classList.add("peca");
    novaPeca.innerHTML = `<h2>Peça ${n}</h2>
                    <label for="valorPeca${n}">Valor Unitário: <input type="number" name="valorPeca${n}" id="valorPeca${n}" placeholder="0,00" > </label>
                    <label for="quantidadePecas${n}">Quantidade: <input type="number" name="quantidadePecas${n}" id="quantidadePecas${n}" placeholder="0" ></label>
                    <label for="valorDeVenda${n}">Valor de Venda Unitário: <input type="number" name="valorDeVenda${n}" id="valorDeVenda${n}" placeholder="0,00" ></label>`;
    let pecas = document.getElementById("pecas");
    pecas.appendChild(novaPeca);
}

function calcular() {
    let mesElemento = document.getElementById("mes");
    let mesValor = mesElemento.value;
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.style.display = "block";
    let valorOriginalElemento = document.getElementById("valorOriginal");
    let acrescentarFreteElemento = document.getElementById("acrescentarFrete");
    let valorFinalElemento = document.getElementById("valorFinal");
    let lucroElemento = document.getElementById("lucro");
    let taxaElemento = Number(document.getElementById("taxa").value);

    var valorOriginal = 0;
    var valorFinal = 0;
    for(i = 1; i <= n; i ++){
        let valorPeca = document.getElementById(`valorPeca${i}`).value;
        let quantidadePecas = document.getElementById(`quantidadePecas${i}`).value;
        let valorDeVenda = document.getElementById(`valorDeVenda${i}`).value;
        valorOriginal += valorPeca * quantidadePecas;
        valorFinal += valorDeVenda * quantidadePecas;
        quantidadeTotal += quantidadePecas;
    }
    
    valorOriginal += taxaElemento;

    var valorFrete = taxaElemento / quantidadeTotal ;

    valorOriginalElemento.innerHTML = "Mês: " + mesValor + "<br>Valor Original: R$ " + valorOriginal.toFixed(2);
    valorFinalElemento.innerHTML = "Valor Final: R$ " + valorFinal.toFixed(2);
    acrescentarFreteElemento.innerHTML = "Acréscimo de frete por peça: R$ " + valorFrete.toFixed(2);
    lucroElemento.innerHTML = "Lucro: R$" + (valorFinal - valorOriginal).toFixed(2);
}