// ================================
// LISTA DE PRESENÇA
// ================================

let presenca = [
    "Carlos",
    "João",
    "Carlos",
    "Ana",
    "Ana",
    "Carlos",
    "João",
    "Pedro",
    "Pedro",
    "Ana",
    "Carlos",
]

// ================================
// CABEÇALHO DO RELATÓRIO
// ================================

console.log("RELATÓRIO DE PRESENÇA")
console.log()

// ================================
// CONTAGEM DE CARLOS
// ================================

let contador = 0

for (let i = 0; i < presenca.length; i++) {
    if (presenca[i] === "Carlos") {
        presenca.splice(i, 1)
        i--
        contador++
    }
}

console.log(`Carlos compareceu à aula ${contador} vezes`)

// ================================
// CONTAGEM DE ANA
// ================================

contador = 0

for (let i = 0; i < presenca.length; i++) {
    if (presenca[i] === "Ana") {
        presenca.splice(i, 1)
        i--
        contador++
    }
}

console.log(`Ana compareceu à aula ${contador} vezes`)

// ================================
// CONTAGEM DE JOÃO
// ================================

contador = 0

for (let i = 0; i < presenca.length; i++) {
    if (presenca[i] === "João") {
        presenca.splice(i, 1)
        i--
        contador++
    }
}

console.log(`João compareceu à aula ${contador} vezes`)

// ================================
// CONTAGEM DE PEDRO
// ================================

contador = 0

for (let i = 0; i < presenca.length; i++) {
    if (presenca[i] === "Pedro") {
        presenca.splice(i, 1)
        i--
        contador++
    }
}

console.log(`Pedro compareceu à aula ${contador} vezes`)

// ================================
// RESTAURAÇÃO DA LISTA
// ================================

presenca = [
    "Carlos",
    "João",
    "Carlos",
    "Ana",
    "Ana",
    "Carlos",
    "João",
    "Pedro",
    "Pedro",
    "Ana",
    "Carlos",
]

// ================================
// LISTA FINAL
// ================================

console.log()
console.log("Lista restaurada:")
console.log(presenca)
