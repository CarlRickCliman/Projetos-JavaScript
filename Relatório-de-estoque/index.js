// ================================
// RELATÓRIO DE ESTOQUE
// ================================


// ================================
// 1. BASE DE DADOS (PRODUTOS)
// ================================
let produtos = [
  {
    Produto: "Notebook",
    Categoria: "Informática",
    Preco: 3500,
    Estoque: 5,
  },
  {
    Produto: "Mouse",
    Categoria: "Periférico",
    Preco: 80,
    Estoque: 12,
  },
  {
    Produto: "Monitor",
    Categoria: "Informática",
    Preco: 900,
    Estoque: 0,
  },
  {
    Produto: "Microfone",
    Categoria: "Periférico",
    Preco: 70,
    Estoque: 10,
  }
]


// ================================
// 2. VARIÁVEIS DE CONTROLE
// ================================
let precoPorEstoque = 0
let valorTotal = 0
let estoqueZerados = 0
let valorMedio = 0
let desconto = 0


// ================================
// 3. CABEÇALHO DO RELATÓRIO
// ================================
console.log(`--- Sua empresa possui ${produtos.length} produtos cadastrados ---`)
console.log()
console.log(`| Produtos: |`.padEnd(16) + `| Categoria: |`.padEnd(18) + `| Valor: |`.padEnd(14) + `| Estoque: |`.padEnd(14) + `| Valor do Estoque: |`)
console.log()


// ================================
// 4. PROCESSAMENTO DOS PRODUTOS
// ================================
for (let i = 0; i < produtos.length; i++) {

  // Aplicação de desconto por categoria
  if (produtos[i].Categoria === "Informática") {
    desconto = produtos[i].Preco * 0.15
    produtos[i].Preco -= desconto
  }

  // Cálculo do valor total por estoque
  precoPorEstoque = produtos[i].Preco * produtos[i].Estoque

  // Exibição formatada do produto
  console.log(
    `| ${produtos[i].Produto} |`.padEnd(16) +
    `| ${produtos[i].Categoria} |`.padEnd(18) +
    `| R$${produtos[i].Preco.toFixed(2)} |`.padEnd(14) +
    `| ${produtos[i].Estoque} |`.padEnd(14) +
    `| R$${precoPorEstoque.toFixed(2)} |`
  )

  console.log()

  // Acúmulo de valores gerais
  valorTotal += precoPorEstoque
  valorMedio += produtos[i].Preco

  // Contagem de estoque zerado
  if (produtos[i].Estoque == 0) {
    estoqueZerados++
  }
}


// ================================
// 5. RESUMO FINAL
// ================================
console.log()
console.log(`Valor Total: R$${valorTotal.toFixed(2)}`)
console.log()
console.log(`Valor Médio: R$${valorMedio.toFixed(2) / produtos.length}`)
console.log()


// ================================
// 6. RELATÓRIO DE ESTOQUE ZERADO
// ================================
if (estoqueZerados == 1) {
  console.log(`Sua empresa tem ${estoqueZerados} produto com Estoque Zerado`)
} else if (estoqueZerados > 1) {
  console.log(`Sua empresa tem ${estoqueZerados} produtos com Estoque Zerado`)
} else {
  console.log("Você não possui estoques zerados")
}