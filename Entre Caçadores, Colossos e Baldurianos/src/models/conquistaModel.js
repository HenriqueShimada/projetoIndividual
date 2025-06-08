var database = require("../database/config");

function registrarConquista(idUsuario, idConquista) {
    const instrucaoSql = `
        INSERT INTO usuarioConquista (fkUsuario, fkConquista)
        VALUES (${idUsuario}, ${idConquista});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarConquista
};
