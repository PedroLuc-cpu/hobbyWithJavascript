export function desconto_de_produto_unidades(valor_produto, valor_desconto) {
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