const linkTag = document.createElement("a")
// Nome da extensão e arquivo que irá ser baixado.
linkTag.download = "index.pdf"

const myCustomBlob = new Blob([`<aside id="conteudo_filho_aside">
      <div class="card-body bg-light-subtle border border-1 rounded">
        <h4 class="card-title">Valor:</h4>
        <p class="card-text" id="valor_do_produto_infor">R$: 00,00</p>
      </div>
      <div class="card-body border bg-light-subtle border-1 rounded">
        <h4 class="card-title">Desconto:</h4>
        <p class="card-text" id="desconto_do_produto_infor">R$: 00,00</p>
      </div>
      <div class="card-body bg-light-subtle border border-1 rounded">
        <h4 class="card-title">Desconto Total:</h4>
        <p id="desconto_total_do_produto_infor">R$: 00,00</p>
      </div>
      <div class="card-body bg-light-subtle border border-1 rounded">
        <h4 class="card-title">SubTotal:</h4>
        <p class="card-text" id="subTotal_do_produto_infor">R$: 00,00</p>
      </div>
      <div class="card-body bg-light-subtle border border-1 rounded">
        <h4 class="card-title">Valor Total:</h4>
        <p class="card-text" id="valor_total_do_produto_infor">R$: 00,00</p>
      </div>
    </aside>`], {
  type: "application/pdf"
})

const url = URL.createObjectURL(myCustomBlob)

// linkTag.href = url
// // Baixa automaticamente o arquivo 
// linkTag.click()

//Limpar referência do blob na memória do browser, pois como blob
//é criado no documento ele irá ser imutável e só irá ser limpado da memória quando o documento for desfeito ou quando for solicitado a sua remoção da memória.
URL.revokeObjectURL(url)