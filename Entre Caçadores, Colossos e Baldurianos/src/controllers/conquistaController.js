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

function listarConquista(req, res) {
    const idUsuario = req.params.idUsuario;

    conquistaModel.listarConquista(idUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.error("Erro ao buscar conquistas:", erro);
            res.status(500).json({ erro: "Erro ao buscar conquistas" });
        });
}

module.exports = {
    registrarConquista,
    listarConquista
};
