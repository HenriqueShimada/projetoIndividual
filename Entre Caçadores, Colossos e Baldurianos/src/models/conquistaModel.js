var database = require("../database/config");

function registrarConquista(idUsuario, idConquista) {
    const instrucaoSql = `insert into usuarioConquista (fkUsuario, fkConquista) values (${idUsuario}, ${idConquista});`;
    return database.executar(instrucaoSql);
}

function listarConquista(idUsuario) {
    const instrucao = `select * from usuarioConquista join conquista on fkConquista = idConquista where fkUsuario = ${idUsuario}; `;
    return database.executar(instrucao);
}

module.exports = {
    registrarConquista,
    listarConquista
};
