// Cálculo de Rotina de Estudos
function calcularPontosDeAprendizado () {
    
    // Variáveis Base

    let pontosObtidos = 20 // Quantidade de Pontos por Hora
    let horasEstudadas = 5 // Horas estudadas por Dia
    let diasEstudados = 3 // Dias estudados na Semana
    let conteudoRevisado = false // Conteúdo Revisado
    let dificuldade = "media" // Nível de Dificuldade da Matéria: "baixa", "média", "alta"

    // Cálculo de Pontos Totais

    let horasTotais = horasEstudadas * diasEstudados
    let pontosTotais = pontosObtidos * horasTotais

    // Estimativa de Pontos
    
    let estudarPorDia = 5 // Quantidade de horas à estudar em um dia
    let diasUteis = 5 // Dias Úteis na Semana
    let estudarPorSemana = estudarPorDia * diasUteis // Horas À Estudar por Semana
    let pontuacaoMaxima = pontosObtidos * estudarPorSemana // Pontuação Máxima sem os Bonus

    // Cálculo do Nível de Dificuldade

    if(dificuldade === "baixa") {
        pontuacaoMaxima += 10
        pontosTotais += 10

    } else if(dificuldade === "media") {
        pontuacaoMaxima += 25
        pontosTotais += 25

    } else {
        pontuacaoMaxima += 50
        pontosTotais += 50
    }
    
    // Cálculo da Revisão

    if(conteudoRevisado) {
        pontuacaoMaxima += 100
        pontosTotais += 100

    }

   // RETORNAR

    console.log('--- PONTOS DE APRENDIZADO ---')
    console.log(`Pontos Obtidos: ${pontosTotais} pontos`)
    console.log(`Quantidade de Horas Estudadas: ${horasTotais}h`)
    console.log(`Dificuldade da Matéria: ${dificuldade}`)
    console.log(`Pontos Esperados: ${pontuacaoMaxima}`)
    console.log(`Estimativa de Progresso: ${(pontosTotais / pontuacaoMaxima * 100).toFixed(2)}% de ${pontuacaoMaxima}`)

    
    if(conteudoRevisado) {
    console.log('Conteúdo Revisado!!!')

    }

}
        
calcularPontosDeAprendizado()
