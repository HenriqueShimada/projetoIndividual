var express = require("express");
var router = express.Router();
var conquistaController = require("../controllers/conquistaController");

router.post("/registrar/:idUsuario", function (req, res) {
    conquistaController.registrarConquista(req, res);
});

router.get("/usuario/:idUsuario", (req, res) => {
    conquistaController.listarConquista(req, res);
});

module.exports = router;