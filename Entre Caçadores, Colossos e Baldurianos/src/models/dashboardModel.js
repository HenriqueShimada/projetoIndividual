var database = require("../database/config")


function obterAcertos(id){
    const instrucaoSql = `select acertos from sessaoQuiz where fkUsuario = ${id} order by idSessaoQuiz desc limit 1;`;

    return database.executar(instrucaoSql);
}

function obterErros(id){
    const instrucaoSql = `select erros from sessaoQuiz where fkUsuario = ${id} order by idSessaoQuiz desc limit 1;`;

    return database.executar(instrucaoSql);
}

function obterGraficos(id){
    const instrucaoSql = ` SELECT idSessaoQuiz, pontuacao FROM sessaoQuiz where fkUsuario = ${id};`;

    return database.executar(instrucaoSql);
}

function obterPontuacao(id){
    const instrucaoSql = `select max(pontuacao) as pontuacao from sessaoQuiz where fkUsuario = ${id};`;

    return database.executar(instrucaoSql);
}


module.exports = {
    obterErros,
    obterAcertos,
    obterGraficos,
    obterPontuacao
};