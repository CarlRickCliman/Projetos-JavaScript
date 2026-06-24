// ================================
// LISTA DE PRESENÇA
// ================================


// LISTA DE ALUNOS
let alunos = [
    "Carlos",
    "Ana",
    "Julia",
    "Joao",
    "Arthur",
    "Anny",
]

// ================================
// CABEÇALHO DO RELATÓRIO
// ================================

console.log("Lista de Alunos".padEnd(25) + "Presenças:")

// ================================
// FUNÇÃO DE PRESENÇA POR ALUNO
// ================================

function presenca(nome) {
    if(nome === "Carlos") return 5 
    else if(nome === "Ana") return 3
    else if(nome === "Julia") return 5
    else if(nome === "Joao") return 2
    else if(nome === "Arthur") return 6
    else if(nome === "Anny") return 2
}

// ================================
// LOOP DE EXIBIÇÃO
// ================================

for(let i = 0; i < alunos.length; i++) { 
    console.log(`-- ${alunos[i]} --`.padEnd(29) + presenca(alunos[i]))
}
