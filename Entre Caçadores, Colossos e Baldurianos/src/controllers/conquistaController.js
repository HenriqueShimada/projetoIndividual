var conquistaModel = require("../models/conquistaModel");

function registrarConquista(req, res) {
    var idUsuario = req.params.idUsuario;
    var idConquista = req.body.idConquista;

    conquistaModel.registrarConquista(idUsuario, idConquista)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao registrar conquista: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrarConquista
};
