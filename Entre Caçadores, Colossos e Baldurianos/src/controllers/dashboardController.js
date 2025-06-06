var dashboardModel = require("../models/dashboardModel");

function obterAcertos(req, res){
    var id = req.params.id;

    if(id === undefined){
        res.status(400).send('O usuario esta sem id');

        console.log('Usuario sem id');
        return;
    } else{
        dashboardModel.obterAcertos(id)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(
            function(erro){
                console.log(erro);
                console.log("\nHouve um erro ao capturar os acertos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    obterAcertos
}