var express = require("express");
var router = express.Router();

dashboardController = require('../controllers/dashboardController')

router.get('/obterAcertos/:id', function(req,res){
    dashboardController.obterAcertos(req, res)
})

router.get('/obterErros/:id', function(req,res){
    dashboardController.obterErros(req, res)
})

router.get('/obterGraficos/:id', function(req,res){
    dashboardController.obterGraficos(req, res)
})

router.get('/obterPontuacao/:id', function(req,res){
    dashboardController.obterPontuacao(req, res)
})

module.exports = router;