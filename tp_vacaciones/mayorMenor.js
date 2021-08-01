"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var FS = require("fs");
var Mayormenor = /** @class */ (function () {
    function Mayormenor(estado) {
        this.estado = estado;
    }
    ;
    Mayormenor.prototype.getEstado = function () {
        if (this.estado) {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
        ;
    };
    ;
    Mayormenor.prototype.getTirarCartas = function () {
        var tirarCarta = RLS.question("Ingrese 0 para tirar una carta, 1 para finalizar: ");
        var sumaAciertos = 0;
        while (tirarCarta != "1") {
            var cartaElegida = this.getAleatorio(1, 12);
            console.log(cartaElegida);
            var respuestaJugador = RLS.question("Apuesta por mayor o menor a " + cartaElegida + "?: ");
            switch (respuestaJugador) {
                case "mayor":
                    {
                        var cartaAComparar = this.getAleatorio(1, 12);
                        if (cartaAComparar > cartaElegida) {
                            sumaAciertos++;
                            console.log("salio [" + cartaAComparar + "] Ganaste");
                            FS.appendFileSync("mayorMenor.txt", "Hubo un total de " + sumaAciertos + " aciertos\n");
                        }
                        else {
                            console.log("salio [" + cartaAComparar + "] Lo sentimos vuelve a intentarlo");
                        }
                        ;
                        break;
                    }
                    ;
                case "menor":
                    {
                        var cartaAComparar = this.getAleatorio(1, 12);
                        if (cartaAComparar < cartaElegida) {
                            sumaAciertos++;
                            console.log("salio [" + cartaAComparar + "] Ganaste");
                            FS.appendFileSync("mayorMenor.txt", "Hubo un total de " + sumaAciertos + " aciertos\n");
                        }
                        else {
                            console.log("salio [" + cartaAComparar + "] Lo sentimos, vuelve a intentarlo");
                        }
                        ;
                        break;
                    }
                    ;
            }
            ;
            tirarCarta = RLS.question("Ingrese 0 para tirar una carta, 1 para finalizar: ");
        }
        ;
    };
    ;
    Mayormenor.prototype.getAleatorio = function (menorValor, mayorValor) {
        return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
    };
    ;
    return Mayormenor;
}());
exports["default"] = Mayormenor;
;
