var database = require("../database/config")


function obterAcertos(id){
    const instrucaoSql = ` SELECT max(acertos) AS acertos FROM sessaoQuiz where fkUsuario = ${id};`;

    return database.executar(instrucaoSql);
}

module.exports = {
    obterAcertos
};