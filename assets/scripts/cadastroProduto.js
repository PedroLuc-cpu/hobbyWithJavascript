/* eslint-disable prettier/prettier */
export const carrinhoDeCompras = [];

function vibrate(element, durantion) {
  let startTime = null;
  var amplitude = 2;
  var frequency = 5;

  function animete(currentTime) {
    if (!startTime) startTime = currentTime;
    let elapsedTime = currentTime - startTime;
    let progress = elapsedTime / durantion;
    let displacement = amplitude * Math.sin(2 * Math.PI * frequency * progress);
    element.style.transform = "translateX(" + displacement + "px)";
    if (elapsedTime < durantion) requestAnimationFrame(animete);
  }
  requestAnimationFrame(animete);
}

const lista_categoria = [
  {
    value: 1,
    categoria: "alimentos",
  },

  {
    value: 2,
    categoria: "verduras",
  },

  {
    value: 3,
    categoria: "latcinios",
  },

  {
    value: 4,
    categoria: "frutas",
  },

  {
    value: 5,
    categoria: "carnes",
  },

  {
    value: 6,
    categoria: "carnes brancas",
  },

  {
    value: 7,
    categoria: "saladas",
  },

  {
    value: 8,
    categoria: "diversos",
  },
];

// cadastro do produto
const nome_do_produto = document.getElementById("nome_do_produto");
const categoria_produto_select = document.getElementById(
  "categoria_produto_select"
);
const quantidade_do_produto = document.getElementById("quantidade_do_produto");
const preco_do_produto = document.getElementById("preco_do_produto");
const button_cadastrar_produto = document.getElementById(
  "button_cadastrar_produto"
);
const listOfBuying = document.querySelector("#listBuy");

// descontos do produtos =====================================================
const desconto_do_produto = document.getElementById("desconto_do_produto");
const desconto_do_produto_total = document.getElementById(
  "desconto_do_produto_total"
);

// informaçãoes dos produtos =================================================
const valor_do_produto_infor = document.getElementById(
  "valor_do_produto_infor"
);
const desconto_do_produto_infor = document.getElementById(
  "desconto_do_produto_infor"
);
const desconto_total_do_produto_infor = document.getElementById(
  "desconto_total_do_produto_infor"
);
const valor_total_do_produto_infor = document.getElementById(
  "valor_total_do_produto_infor"
);
const subTotal_do_produto_infor = document.getElementById(
  "subTotal_do_produto_infor"
);

// Formador de valores para real =========
const formatador = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

lista_categoria.forEach((categoria) => {
  const options_select_produto = document.createElement("option");
  options_select_produto.selected = categoria.categoria === "diversos";
  options_select_produto.value = categoria.value;
  options_select_produto.textContent = categoria.categoria;
  categoria_produto_select.appendChild(options_select_produto);
});

function percorrer_array_produto_listados(element_by_id) {
  const getElementBy = document.querySelector(String(element_by_id));
  const childrenLists = getElementBy.childNodes;
  const newArrayBuyLists = [];

  for (const iterator of childrenLists) {
    newArrayBuyLists.push(iterator.textContent);
  }
  return newArrayBuyLists;
}

function desconto_de_produto_unidades(valor_produto, valor_desconto) {
  const informacao_do_cadastro = document.getElementById(
    "informacao_do_cadastro"
  );

  if (valor_desconto >= valor_produto) {
    informacao_do_cadastro.innerText =
      "Você não pode dar desconto maior ou igual ao valor do produto.";
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

// Cadastro do produto
function cadastrarProduto() {
  const informacao_do_cadastro = document.getElementById(
    "informacao_do_cadastro"
  );

  if (
    !nome_do_produto.value ||
    !quantidade_do_produto.value ||
    !preco_do_produto.value
  ) {
    vibrate(informacao_do_cadastro, 1000);

    informacao_do_cadastro.className = "alert alert-danger";

    // TODO: estudar uma forma de limpar o delay
    const showmessage = () => {
      informacao_do_cadastro.className = "d-none";
    };
    const idInterval = () => setInterval(showmessage, 4000);
    idInterval();
    clearInterval(idInterval);

    return;
  }

  let valorDesconto = parseFloat(desconto_do_produto.value);
  let valorProduto = parseFloat(preco_do_produto.value);
  let descontoCalculado = desconto_de_produto_unidades(
    valorProduto,
    valorDesconto
  );
  let categoria_produto = "";

  if (descontoCalculado === null) {
    // Não prosseguir com o cadastro se o desconto for inválido
    return;
  }

  categoria_produto_select.addEventListener("change", (e) => {
    const selectedValue = parseInt(e.target.value);
    const selectedCategory = lista_categoria.find(
      (categoria) => categoria.value === selectedValue
    );
    categoria_produto = selectedCategory.categoria;
  });

  let novoProduto = {
    nome: nome_do_produto.value,
    categoria: categoria_produto,
    quantidade: quantidade_do_produto.value,
    preco: valorProduto,
    desconto: descontoCalculado,
  };

  carrinhoDeCompras.push(novoProduto);
  desconto_do_produto_infor.innerText = `R$: ${novoProduto.desconto}`;

  informacao_do_cadastro.innerText = "Produto cadastrado com sucesso";
  informacao_do_cadastro.style.color = "#99CC7D";
  setTimeout(() => {
    informacao_do_cadastro.innerText = "Cadastre o seu produto";
    informacao_do_cadastro.style.color = "orange";
  }, 3000);

  nome_do_produto.value = "";
  quantidade_do_produto.value = "";
  preco_do_produto.value = "";
  rederizarCarrinhoDeCompras();
  desconto_do_produto.value = "";

  percorrer_array_produto_listados("#listBuy");
}

button_cadastrar_produto.addEventListener("click", cadastrarProduto);

function rederizarCarrinhoDeCompras() {
  if (carrinhoDeCompras.length === 0) {
    listOfBuying.innerHTML = `<li class="text-center list-group-item">Nenhum produto cadastrado</li>`;
    listOfBuying.style.fontSize = "2rem";
    listOfBuying.style.padding = "10px";
    listOfBuying.style.color = "#1B1B1B";
    return;
  }

  listOfBuying.innerHTML = "";
  listOfBuying.className = "list-group list-group-flush";
  listOfBuying.style.padding = "10px";
  listOfBuying.style.scrollBehavior = "smooth";

  carrinhoDeCompras.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary fs-6";
    li.style.fontFamily = "arial";
    li.textContent = `${item.quantidade}X ${item.nome} - R$: ${
      formatador.format(item.quantidade * item.preco).replace("R$", "") ??
      "00,00"
    } - desconto ${
      formatador.format(item.desconto).replace("R$", "") ?? "00,00"
    }`;
    valor_do_produto_infor.innerText = `R$: ${
      formatador.format(item.preco).replace("R$", "") ?? "00,00"
    }`;
    desconto_do_produto_infor.innerText = `R$: ${
      formatador
        .format(
          desconto_de_produto_unidades(item.preco.toFixed(2), item.desconto)
        )
        .replace("R$", "") ?? "00,00"
    }`;
    listOfBuying.appendChild(li);
  });
  const valorTotal = carrinhoDeCompras.reduce(
    (total, item) => total + item.quantidade * item.preco,
    0
  );
  subTotal_do_produto_infor.innerText = `R$: ${formatador
    .format(parseFloat(valorTotal))
    .replace("R$", "")}`;
  valor_total_do_produto_infor.innerText = `R$: ${formatador
    .format(parseFloat(valorTotal - desconto_do_produto.value))
    .replace("R$", "")}`;
}

// -------------------------------- parcelamento via cartão de crédito --------------------------------
const btn_Credito = document.getElementById("btn_Credito");

btn_Credito.addEventListener("click", () => {
  const conteudo_dos_parcelamentos = document.createElement("div");
  conteudo_dos_parcelamentos.innerHTML = conteudo_de_pagamento_cartao.append(
    conteudo_dos_parcelamentos
  );
});

const resultado_da_compra = document.getElementById("resultado_da_compra");

  const valorTotal = carrinhoDeCompras.reduce(
    (total, item) => total + item.quantidade * item.preco,
    0
  );

  console.log(valorTotal.length)

resultado_da_compra.innerText = `Valor da comprar: ${valorTotal || "00,00"}`;

function calcularParcelas() {

  // const valorTotal = parseFloat(document.getElementById("valorTotal").value);
  const numParcelas = parseInt(document.getElementById("numParcelas").value);
  const resultado = document.getElementById("resultado");
  const tabelaParcelas = document.getElementById("tabelaParcelas");
  const tabelaCorpo = document.getElementById("tabelaCorpo");
  if (
    isNaN(valorTotal) ||
    isNaN(numParcelas) ||
    valorTotal <= 0 ||
    numParcelas <= 0
  ) {
    resultado.textContent = "Por favor, insira valores válidos.";
    tabelaParcelas.style.display = "none";
    return;
  }

  const valorParcela = (valorTotal / numParcelas).toFixed(2);

  resultado.textContent = `O valor de cada parcela será: R$ ${valorParcela}`;
  tabelaCorpo.innerHTML = "";

  for (let i = 1; i <= numParcelas; i++) {
    const row = document.createElement("tr");
    const cellNumero = document.createElement("td");
    const cellValor = document.createElement("td");

    cellNumero.textContent = i;
    cellValor.textContent = valorParcela;

    row.appendChild(cellNumero);
    row.appendChild(cellValor);
    tabelaCorpo.appendChild(row);
  }

  tabelaParcelas.style.display = "table";
}

document
  .getElementById("calcularParcelas")
  .addEventListener("click", calcularParcelas);

// criar uma logica que der desconto total do produtos quando estiver focado e dar desconto quando apertar a teclar enten sem que cause efeito colateral
// ao cadastar o produtos, pois o mesmo tambem se usa o Enter para cadastar.
// desconto_do_produto_total.addEventListener("focus", () => {
//   desconto_do_produto_total.addEventListener("keypress", function (e) {
//     e.stopPropagation();
//     const valorTotalCarrinho = carrinhoDeCompras.reduce(
//       (previousValue, currentValue) => previousValue + currentValue.preco,
//       0
//     );

//     if (e.shiftKey === "Enter") {
//       alert();
//       desconto_total_do_produto_infor.innerText = `R$: ${
//         valorTotalCarrinho - desconto_do_produto_total.value
//       }`;
//     }
//   });
// });

// document.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     button_cadastrar_produto.click();
//     nome_do_produto.focus();
//     nome_do_produto.value = "";
//     quantidade_do_produto.value = "";
//     preco_do_produto.value = "";
//   }
// });
rederizarCarrinhoDeCompras();
