let livros = [

  {
    titulo: "O Homem em Busca de Sentido",
    autor: "Viktor Frankl",
    categoria: "Psicologia",
    quantidade: 10,
    emprestado: false,
  },

      {
        titulo: "Flow: A Psicologia do Alto Desempenho",
        autor: "Mihaly Csikszentmihalyi",
        categoria: "Psicologia",
        quantidade: 15,
        emprestado: false,
      },

          {
            titulo: "Inteligência Emocional",
            autor: "Daniel Goleman",
            categoria: "Psicologia",
            quantidade: 5,
            emprestado: true,
          },

              {
                titulo: "Em Busca de Nós Mesmos",
                autor: "Clóvis de Barros Filho",
                categoria: "Psicologia",
                quantidade: 16,
                emprestado: false,
              },

                  {
                    titulo: "Cosmos",
                    autor: "Carl Sagan",
                    categoria: "Astronomia",
                    quantidade: 4,
                    emprestado: true,
                  },

                      {
                        titulo: "Breves Respostas para Grandes Questões",
                        autor: "Stephen Hawking",
                        categoria: "Astronomia",
                        quantidade: 19,
                        emprestado: false,
                      },

                          {
                            titulo: "Uma Breve História do Tempo",
                            autor: "Stephen Hawking",
                            categoria: "Astronomia",
                            quantidade: 13,
                            emprestado: false,
                          },

                              {
                                titulo: "Introdução à Engenharia",
                                autor: "Walter Antonio Bazzo",
                                categoria: "Engenharia",
                                quantidade: 6,
                                emprestado: true,
                              },

                                  {
                                    titulo: "The Design of Everyday Things",
                                    autor: "Don Norman",
                                    categoria: "Engenharia",
                                    quantidade: 5,
                                    emprestado: false,
                                  },

                                      {
                                        titulo: "Structures: Or Why Things Don't Fall Down",
                                        autor: "J. E. Gordon",
                                        categoria: "Engenharia",
                                        quantidade: 7,
                                        emprestado: false,
                                      },

]

let categorias = {}

console.log(

`| Livro:`.padEnd(50), `|`, 
`Autor:`.padEnd(35), `|`, 
`Categoria:`.padEnd(18), `|`, 
`Quantidade:`.padEnd(20), `|`, 
`Livro Emprestado:`.padEnd(19), `|`)

console.log()

for(let i = 0; i < livros.length; i++) {

  let cat = livros[i].categoria
  if(categorias[cat]) {

    categorias[cat]++
  } else {

    categorias[cat] = 1
  }

  console.log
  (`| ${livros[i].titulo}`.padEnd(50), `|`, 
  `${livros[i].autor}`.padEnd(35), `|`, 
  `${livros[i].categoria}`.padEnd(18), `|`, 
  `${livros[i].quantidade}`.padEnd(20), `|`, 
  `${livros[i].emprestado ? "Sim" : "Não"}`.padEnd(19), `|`
  )
}

console.log()
console.log(`--------------------------------------------------------------`)
console.log()

console.log(
  `Categorias:`
)
console.log()

for(let cat in categorias) {

  console.log(`${cat}: ${categorias[cat]} livros`)
}

console.log()
console.log(`--------------------------------------------------------------`)
console.log()

i = 0

console.log(`Livros Emprestados:`.padEnd(50), `Categoria:`)
console.log()

for(; i < livros.length; i++) {
  
  if(livros[i].emprestado) {

    console.log(`${livros[i].titulo}`.padEnd(50), `${livros[i].categoria}`)

  } 


}


i = 0

console.log()
console.log(`--------------------------------------------------------------`)
console.log()
console.log(`Livros Disponíveis:`.padEnd(50), `Categoria:`)
console.log()

for(; i < livros.length; i++) {
  
  if(livros[i].emprestado == false) {

    console.log(`${livros[i].titulo}`.padEnd(50), `${livros[i].categoria}`)

  } 



}



console.log()