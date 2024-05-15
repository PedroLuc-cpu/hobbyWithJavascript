const carrinhoDeCompras = [
    { nome: "Camiseta", quantidade: 2, preco: 25.00 },
    { nome: "Calça Jeans", quantidade: 1, preco: 50.00 },
    { nome: "Tênis", quantidade: 1, preco: 80.00 },
    { nome: "Meias", quantidade: 3, preco: 5.00 },
    { nome: "Boné", quantidade: 1, preco: 15.00 },
    { nome: "Shorts", quantidade: 2, preco: 30.00 },
    { nome: "Chinelo", quantidade: 1, preco: 20.00 },
    { nome: "Jaqueta", quantidade: 1, preco: 100.00 },
    { nome: "Cinto", quantidade: 1, preco: 10.00 },
    { nome: "Mochila", quantidade: 1, preco: 40.00 },
    { nome: "Blusa", quantidade: 2, preco: 35.00 },
    { nome: "Calças Legging", quantidade: 2, preco: 45.00 },
    { nome: "Luvas", quantidade: 1, preco: 8.00 },
    { nome: "Bolsa", quantidade: 1, preco: 60.00 },
    { nome: "Óculos de Sol", quantidade: 1, preco: 25.00 },
    { nome: "Relógio", quantidade: 1, preco: 70.00 },
    { nome: "Cachecol", quantidade: 1, preco: 12.00 },
    { nome: "Capa de Chuva", quantidade: 1, preco: 55.00 },
    { nome: "Guarda-chuva", quantidade: 1, preco: 18.00 },
    { nome: "Sapatos", quantidade: 1, preco: 90.12 },
    { nome: "Sapatos", quantidade: 1, preco: 90 },        
];

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
const listingProducts = document.createElement("li")

const valorTotal = resultadoMapper.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})

button_cadastrar_produto.addEventListener("click", function cadastrarProduto(e) {
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
    preco: parseFloat(preco_do_produto.value)
  }
  carrinhoDeCompras.push(novoProduto);
  informacao_do_cadastro.innerText = "Produto cadastrado com sucesso"
  informacao_do_cadastro.style.color = "#99CC7D"
  setTimeout(() => {
    informacao_do_cadastro.innerText = "Cadastre o seu produto"
    informacao_do_cadastro.style.color = "orange"
  }, 3000)
  rederizarCarrinhoDeCompras();
})

function rederizarCarrinhoDeCompras() {
  if(carrinhoDeCompras.length === 0) {
    listOfBuying.innerHTML = "<li>Nenhum produto cadastrado</li>";
    return;
  }


  listOfBuying.innerHTML = '';
  listOfBuying.style.border = '1px solid black'
  listOfBuying.style.padding = '10px'
  carrinhoDeCompras.forEach((item) => {
    const li = document.createElement('li');
    li.style.listStyle = "none"
    li.style.fontFamily = "arial"
    li.style.fontSize = "24px"
    li.textContent = `${item.quantidade}X ${item.nome} - R$ ${item.quantidade * item.preco.toFixed(2)}`
    listOfBuying.appendChild(li)
  });

      const valorTotal = carrinhoDeCompras.reduce((total, item) => total + item.quantidade * item.preco, 0);
      const totalElement = document.createElement('li');
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
rederizarCarrinhoDeCompras()


