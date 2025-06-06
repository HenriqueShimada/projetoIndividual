var express = require("express");
var router = express.Router();

    dashboardController = require('../controllers/dashboardController')

router.get('/obterAcertos/:id', function(req,res){
    dashboardController.obterAcertos(req, res)
})

module.exports = router;