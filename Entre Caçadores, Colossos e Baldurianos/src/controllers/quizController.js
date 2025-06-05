var quizModel = require("../models/quizModel");


function persistirDadosQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.params.idUsuario;
    var pontos = req.body.pontucao;
    var acertos = req.body.acertividade;
    var erros = req.body.erro;
        quizModel.persistirDadosQuiz(id, pontos, acertos, erros)
            .then(
                function (resultado) {
                    
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
module.exports = {
   persistirDadosQuiz
}