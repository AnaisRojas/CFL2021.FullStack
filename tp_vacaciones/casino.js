"use strict";
exports.__esModule = true;
var ruleta_1 = require("./ruleta");
var tragamonedas_1 = require("./tragamonedas");
var mayorMenor_1 = require("./mayorMenor");
var FS = require("fs");
var Casino = /** @class */ (function () {
    function Casino() {
        this.ruleta = new ruleta_1["default"](true);
        this.tragamonedas = new tragamonedas_1["default"](true);
        this.mayorMenor = new mayorMenor_1["default"](true);
    }
    ;
    Casino.prototype.jugarTragamonedas = function () {
        this.tragamonedas.getResultadoNumero();
    };
    ;
    Casino.prototype.jugarTragamonedasEspecial = function () {
        this.tragamonedas.getResultadoFruta();
    };
    ;
    Casino.prototype.jugarRuleta = function () {
        this.ruleta.getGirar();
    };
    ;
    Casino.prototype.jugarMayorMenor = function () {
        this.mayorMenor.getTirarCartas();
    };
    ;
    Casino.prototype.mostrarInfo = function (ruta) {
        var informacionJugador = (FS.readFileSync(ruta, 'utf8')).split("\n");
        console.log(informacionJugador);
    };
    ;
    return Casino;
}());
exports["default"] = Casino;
;
