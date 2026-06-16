// DUELO COM DADO COM 20 LADOS

// VIDA DOS JOGADORES

let vidaDoJogador1 = 50
let vidaDoJogador2 = 50

// VEZ DO JOGADOR 1
console.log("--- Jogador 1 ---")
function rolarD20() { 
    return Math.floor(Math.random () * 20) + 1
}

let ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)

// VEZ DO JOGADOR 1

console.log("...vez do Jogador 1")
console.log("--- Jogador 1 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador2 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador2 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO AVERSÁRIO

console.log(`Vida do Jogador 2: ${vidaDoJogador2}`)

// PASSAGEM DE TEMPO

console.log("...vez do Jogador 2")

// VEZ DO JOGADOR 2

console.log("--- Jogador 2 ---")

ataque = rolarD20()
console.log(`Tirou ${ataque} no dado`)

if(ataque >= 10 && ataque < 20) {
    vidaDoJogador1 -= 10
    console.log("Acertou!")
} else if(ataque < 10) {
    console.log("Errou!")
} else if(ataque === 20) {
    vidaDoJogador1 -= 30
    console.log("Dano Crítico!")
}

// VIDA ATUAL DO ADVERSÁRIO

console.log(`Vida do Jogador 1: ${vidaDoJogador1}`)
console.log()

if(vidaDoJogador1 > vidaDoJogador2 && vidaDoJogador1 > 0) {
    console.log("--- VITÓRIA DO JOGADOR 1! ---")

} else if(vidaDoJogador1 < vidaDoJogador2 && vidaDoJogador2 > 0) {
    console.log("--- VITÓRIA DO JOGADOR 2! ---" )

} else if(vidaDoJogador1 < 0 && vidaDoJogador2 < 0) {
    console.log("--- EMPATE--- ")

} else {
    console.log("--- EMPATE--- ")
}

console.log()

if(vidaDoJogador1 < 0 && vidaDoJogador2 > 0) {
    console.log(`VIDA FINAL DO JOGADOR 1: 0`)
    console.log(`VIDA FINAL DO JOGADOR 2: ${vidaDoJogador2}`)
} else if(vidaDoJogador2 < 0 && vidaDoJogador1 > 0) {
    console.log(`VIDA FINAL DO JOGADOR 1: ${vidaDoJogador1}`)
    console.log(`VIDA FINAL DO JOGADOR 2: 0`)
} else if(vidaDoJogador2 <= 0 && vidaDoJogador1 <= 0) {
    console.log(`VIDA FINAL DO JOGADOR 1: 0`)
    console.log(`VIDA FINAL DO JOGADOR 2: 0`)
} else {
    console.log(`VIDA FINAL DO JOGADOR 1: ${vidaDoJogador1}`)
    console.log(`VIDA FINAL DO JOGADOR 2: ${vidaDoJogador2}`)
}
