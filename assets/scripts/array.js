/* eslint-disable prettier/prettier */

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
const listOfBuying = document.querySelector("#listBuy")

// descontos do produtos =====================================================
const desconto_do_produto = document.getElementById("desconto_do_produto");
const desconto_do_produto_total = document.getElementById("desconto_do_produto_total");

// informaçãoes dos produtos =================================================
const valor_do_produto_infor  = document.getElementById("valor_do_produto_infor");
const desconto_do_produto_infor = document.getElementById("desconto_do_produto_infor");
const desconto_total_do_produto_infor = document.getElementById('desconto_total_do_produto_infor');
const valor_total_do_produto_infor = document.getElementById("valor_total_do_produto_infor");
const subTotal_do_produto_infor = document.getElementById("subTotal_do_produto_infor");

function percorrer_array_produto_listados(element_by_id) {
  const getElementBy = document.querySelector(String(element_by_id));
  const childrenLists = getElementBy.childNodes
  const newArrayBuyLists = [];

  for (const iterator of childrenLists) {
    newArrayBuyLists.push(iterator.textContent);
  }
  return newArrayBuyLists;
}

function desconto_de_produto_unidades(valor_produto, valor_desconto) {
  const informacao_do_cadastro = document.getElementById("informacao_do_cadastro");

  if (valor_desconto >= valor_produto) {
    informacao_do_cadastro.innerText = "Você não pode dar desconto maior ou igual ao valor do produto.";
    informacao_do_cadastro.style.color = "red";
    return null;
  }
  let novo_valor = parseFloat(valor_produto) - parseFloat(valor_desconto);

  if (novo_valor < 0) {
    informacao_do_cadastro.innerText = "O desconto é muito alto";
    informacao_do_cadastro.style.color = "red";
    return null;
  }

  return parseFloat(valor_desconto.toFixed(2));
}

function cadastrarProduto(e) {
  const informacao_do_cadastro = document.getElementById("informacao_do_cadastro");
  
  if (!nome_do_produto.value || !quantidade_do_produto.value || !preco_do_produto.value) {
    vibrate(informacao_do_cadastro, 1000)
    
    informacao_do_cadastro.className = "alert alert-danger"
    setInterval(() => {
      informacao_do_cadastro.className = "d-none"
    },4000)
    return;
  }

  let valorDesconto = parseFloat(desconto_do_produto.value);
  let valorProduto = parseFloat(preco_do_produto.value);
  let descontoCalculado = desconto_de_produto_unidades(valorProduto, valorDesconto);

  if (descontoCalculado === null) {
    // Não prosseguir com o cadastro se o desconto for inválido
    return;
  }

  let novoProduto = {
    nome: nome_do_produto.value,
    quantidade: quantidade_do_produto.value,
    preco: valorProduto,
    desconto: descontoCalculado,
  };

  carrinhoDeCompras.push(novoProduto);
  desconto_do_produto_infor.innerText = `R$: ${novoProduto.desconto}`;

  informacao_do_cadastro.innerText = "Produto cadastrado com sucesso"
  informacao_do_cadastro.style.color = "#99CC7D"
  setTimeout(() => {
    informacao_do_cadastro.innerText = "Cadastre o seu produto"
    informacao_do_cadastro.style.color = "orange"
  }, 3000);

  nome_do_produto.value = "";
  quantidade_do_produto.value = "";
  preco_do_produto.value = "";
  desconto_do_produto.value = "";
  
  rederizarCarrinhoDeCompras();
  percorrer_array_produto_listados("#listBuy")
}

button_cadastrar_produto.addEventListener("click", cadastrarProduto)

function rederizarCarrinhoDeCompras() {
  if(carrinhoDeCompras.length === 0) {
    listOfBuying.innerHTML = `<li class="text-center list-group-item">Nenhum produto cadastrado</li>`;
    listOfBuying.style.fontSize = "2rem"
    listOfBuying.style.padding = '10px'
    listOfBuying.style.color = "#1B1B1B"
    return;
  }


  listOfBuying.innerHTML = '';
  listOfBuying.className = "list-group list-group-flush"
  listOfBuying.style.padding = '10px'
  listOfBuying.style.scrollBehavior = 'smooth'; 


  carrinhoDeCompras.forEach((item) => {
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary fs-6"
    li.style.fontFamily = "arial"
    li.textContent = `${item.quantidade}X ${item.nome} - R$: ${item.quantidade * item.preco.toFixed(2)} - desconto ${item.desconto}`
    valor_do_produto_infor.innerText = `R$: ${item.preco.toFixed(2)}`;
    desconto_do_produto_infor.innerText = `R$: ${desconto_de_produto_unidades(item.preco.toFixed(2), item.desconto)}`;
    listOfBuying.appendChild(li)
  });
      const valorTotal = carrinhoDeCompras.reduce((total, item) => total + item.quantidade * item.preco, 0);
      subTotal_do_produto_infor.innerText = `R$: ${parseFloat(valorTotal).toFixed(2)}`;
      valor_total_do_produto_infor.innerText = `R$: ${parseFloat(valorTotal - desconto_do_produto.value).toFixed(2)}`;
}


// criar uma logica que der desconto total do produtos quando estiver focado e dar desconto quando apertar a teclar enten sem que cause efeito colateral
// ao cadastar o produtos, pois o mesmo tambem se usa o Enter para cadastar.
desconto_do_produto_total.addEventListener("focus", () => {
  desconto_do_produto_total.addEventListener('keypress', function (e) {
    e.stopPropagation();
    const valorTotalCarrinho = carrinhoDeCompras.reduce(
      (previousValue, currentValue) => previousValue + currentValue.preco,
      0,
    );

    if (e.shiftKey === 'Enter') {
      alert();
      desconto_total_do_produto_infor.innerText = `R$: ${valorTotalCarrinho - desconto_do_produto_total.value}`;
    }
  });
})


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




// TODO: Verficado o motivo de não estar mais cadastrando os produtos, supeito que seja o novo evento de dar desconto total usando o keyPress