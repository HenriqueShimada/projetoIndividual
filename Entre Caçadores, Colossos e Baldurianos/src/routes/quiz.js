var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/persistirDadosQuiz/:idUsuario", function (req, res) {
    quizController.persistirDadosQuiz(req, res);
})

module.exports = router;