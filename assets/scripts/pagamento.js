const forma_de_pagamento_dinherio = document.getElementById(
  "forma_de_pagamento_dinherio"
);

const forma_de_pagamento_cartao = document.getElementById(
  "forma_de_pagamento_cartao"
);

const forma_de_pagamento_pix = document.getElementById(
  "forma_de_pagamento_pix"
);

const forma_de_pagamento_loja = document.getElementById(
  "forma_de_pagamento_loja"
);

const pagamento_no_credito = document.getElementById("pagamento_no_credito");

pagamento_no_credito.addEventListener("click", () => {
  console.log("pagamento_no_no");
});

// const btn_Credito = document.getElementById("btn_Credito");

// btn_Credito.addEventListener("click", () => {
//   const conteudo_dos_parcelamentos = document.createElement("div");
//   conteudo_dos_parcelamentos.innerHTML = conteudo_de_pagamento_cartao.append(
//     conteudo_dos_parcelamentos
//   );
// });

// function calcularParcelas() {
//   const valorTotal = parseFloat(document.getElementById("valorTotal").value);
//   const numParcelas = parseInt(document.getElementById("numParcelas").value);
//   const resultado = document.getElementById("resultado");
//   const tabelaParcelas = document.getElementById("tabelaParcelas");
//   const tabelaCorpo = document.getElementById("tabelaCorpo");

//   if (
//     isNaN(valorTotal) ||
//     isNaN(numParcelas) ||
//     valorTotal <= 0 ||
//     numParcelas <= 0
//   ) {
//     resultado.textContent = "Por favor, insira valores válidos.";
//     tabelaParcelas.style.display = "none";
//     return;
//   }

//   const valorParcela = (valorTotal / numParcelas).toFixed(2);

//   resultado.textContent = `O valor de cada parcela será: R$ ${valorParcela}`;
//   tabelaCorpo.innerHTML = "";

//   for (let i = 1; i <= numParcelas; i++) {
//     const row = document.createElement("tr");
//     const cellNumero = document.createElement("td");
//     const cellValor = document.createElement("td");

//     cellNumero.textContent = i;
//     cellValor.textContent = valorParcela;

//     row.appendChild(cellNumero);
//     row.appendChild(cellValor);
//     tabelaCorpo.appendChild(row);
//   }

//   tabelaParcelas.style.display = "table";
// }

// document
//   .getElementById("calcularParcelas")
//   .addEventListener("click", calcularParcelas);
