var express = require("express");
var router = express.Router();
var conquistaController = require("../controllers/conquistaController");

router.post("/registrar/:idUsuario", function (req, res) {
    conquistaController.registrarConquista(req, res);
});

module.exports = router;