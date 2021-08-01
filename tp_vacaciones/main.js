"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var RLS = require("readline-sync");
var casino = new casino_1["default"]();
casino.mostrarInfo();
var opcionJuego = RLS.question("Selecciona el juego que quieras jugar! (presione T para jugar al Tragamonedas, TE para jugar al Tragamonedas especial, R para Ruleta o M para Mayormenor), presione ENTER para finalizar: ").toUpperCase();
while (opcionJuego != " ") {
    switch (opcionJuego) {
        case "T":
            {
                casino.jugarTragamonedas();
                break;
            }
            ;
        case "TE":
            {
                casino.jugarTragamonedasEspecial();
                break;
            }
            ;
        case "R":
            {
                casino.jugarRuleta();
                break;
            }
            ;
        case "M":
            {
                casino.jugarMayorMenor();
                break;
            }
            ;
    }
    ;
    opcionJuego = RLS.question("Selecciona el juego que quieras jugar! (T-tragamonedas/TE-tragamonedas especial/M-mayorMenor/R-ruleta), presione ENTER para finalizar: ").toUpperCase();
}
;
