
const carrinhoDeCompras = [];

function vibrate(element, durantion) {
  let startTime = null;
  var amplitude = 2;
  var frequency = 5;

  function animete(currentTime) {
    if (!startTime) startTime = currentTime;
    let elapsedTime = currentTime - startTime;
    let progress = elapsedTime / durantion;
    let displacement = amplitude * Math.sin(2 * Math.PI * frequency * progress);
    element.style.transform = 'translateX(' + displacement + 'px)';
    if (elapsedTime < durantion)
      requestAnimationFrame(animete)
  }
  requestAnimationFrame(animete);
}


const nome_do_produto = document.getElementById("nome_do_produto");
const quantidade_do_produto = document.getElementById("quantidade_do_produto");
const preco_do_produto = document.getElementById("preco_do_produto");
const button_cadastrar_produto = document.getElementById("button_cadastrar_produto");
const resultadoMapper = carrinhoDeCompras.reduce((previousValue, currentValue) => previousValue + currentValue.preco, 0)
const listOfBuying = document.querySelector("#listBuy")
const conteudo_do_botao = document.getElementById("conteudo_do_botao");
const listingProducts = document.createElement("li")
const valorTotal = resultadoMapper.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})

// descontos do produtos =====================================================
const desconto_do_produto = document.getElementById("desconto_do_produto");
const desconto_do_produto_total = document.getElementById("desconto_do_produto_total");

// informaçãoes dos produtos =================================================
const valor_do_produto_infor  = document.getElementById("valor_do_produto_infor");
const desconto_do_produto_infor = document.getElementById("desconto_do_produto_infor");
const valor_total_do_produto_infor = document.getElementById("valor_total_do_produto_infor");
const subTotal_do_produto_infor = document.getElementById("subTotal_do_produto_infor");


function desconto_de_produto_unidades(valor_produto, valor_desconto) {
  if (valor_desconto >= valor_produto) {
    informacao_do_cadastro.innerText = "Você não pode dar desconto maior ou igual ao valor do produto.";
    informacao_do_cadastro.style.color = "red";
    return;
  }
  let novo_valor = parseFloat(valor_produto) - parseFloat(valor_desconto);

  if (novo_valor < 0) {
    informacao_do_cadastro.innerText = "O desconto é muito alto";
    informacao_do_cadastro.style.color = "red";
    return;
  }

  return parseFloat(valor_desconto.toFixed(2));

}

// function desconto_de_produto_total(valor_desconto, valorTotal){

// }


function cadastrarProduto(e) {
  e.preventDefault();
  const informacao_do_cadastro = document.getElementById("informacao_do_cadastro")
  if (!nome_do_produto.value || !quantidade_do_produto.value || !preco_do_produto.value) {
    informacao_do_cadastro.style.color = 'red'
    vibrate(informacao_do_cadastro, 1000)
    informacao_do_cadastro.innerText = "Por favor, preencha todos os campos antes de cadastrar o produto."
    return;
  }
  let novoProduto = {
    nome: nome_do_produto.value,
    quantidade: quantidade_do_produto.value,
    preco: parseFloat(preco_do_produto.value),
    desconto: parseFloat(desconto_do_produto.value),
  }
  carrinhoDeCompras.push(novoProduto);
  desconto_de_produto_unidades(novoProduto.preco, novoProduto.desconto)
  informacao_do_cadastro.innerText = "Produto cadastrado com sucesso"
  informacao_do_cadastro.style.color = "#99CC7D"
  setTimeout(() => {
    informacao_do_cadastro.innerText = "Cadastre o seu produto"
    informacao_do_cadastro.style.color = "orange"
  }, 3000)
    nome_do_produto.value = ""
    quantidade_do_produto.value = ""
    preco_do_produto.value = ""
    desconto_do_produto.value = ""
  rederizarCarrinhoDeCompras();
}

button_cadastrar_produto.addEventListener("click", cadastrarProduto)

function rederizarCarrinhoDeCompras() {
  if(carrinhoDeCompras.length === 0) {
    listOfBuying.innerHTML = "<li>Nenhum produto cadastrado</li>";
    listOfBuying.style.fontSize = "2rem"
    listOfBuying.style.padding = '10px'
    listOfBuying.style.color = "#1B1B1B"
    return;
  }


  listOfBuying.innerHTML = '';
  listOfBuying.style.border = '1px solid black'
  listOfBuying.style.padding = '10px'
  listOfBuying.style.overflowY = 'scroll';
  listOfBuying.style.height = "322px"
  listOfBuying.style.scrollBehavior = 'smooth'; 


  carrinhoDeCompras.forEach((item) => {
    const li = document.createElement('li');
    li.style.listStyle = "none"
    li.style.fontFamily = "arial"
    li.style.fontSize = "24px"
    li.textContent = `${item.quantidade}X ${item.nome} - R$ ${item.quantidade * item.preco.toFixed(2)} - desconto ${item.desconto}`
    valor_do_produto_infor.innerText = `${item.preco.toFixed(2)}`;
    desconto_do_produto_infor.innerText = `${desconto_de_produto_unidades(item.preco.toFixed(2), item.desconto)}`;
  
    // valor_total_do_produto_infor.innerText = `${valorTotal - item.desconto || valorTotal - desconto_do_produto_total.value}`
    listOfBuying.appendChild(li)
  });
      const valorTotal = carrinhoDeCompras.reduce((total, item) => total + item.quantidade * item.preco, 0);
      const totalElement = document.createElement('h6');
        totalElement.style.fontWeight = 'bold';
        totalElement.style.listStyle = "none"
        totalElement.style.fontFamily = "arial"
        totalElement.style.padding = "10px"
        totalElement.style.marginTop = "10px"
        totalElement.style.background = "#99CC7D"
        totalElement.style.color = "#fff"
        totalElement.style.textAlign = "center"
        totalElement.style.fontSize = "1.5rem"
        totalElement.textContent = `Total: R$${valorTotal.toFixed(2)}`;
        listOfBuying.appendChild(totalElement);
}
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    button_cadastrar_produto.click();
    nome_do_produto.focus();
    nome_do_produto.value = ""
    quantidade_do_produto.value = ""
    preco_do_produto.value = ""
  }
})

rederizarCarrinhoDeCompras()


