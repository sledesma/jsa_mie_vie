/**
 * 
 */
/*
const texto = "hola";

const res = texto.replace('h','o'); //oola
const resultado = res.toUpperCase();

console.log(resultado);
*/

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.vida = 100;
        this.ataque = 200;
    }
}

class Partida {
    constructor(jugadores) {
        this.jugadores = jugadores;
        this.contadorAcciones = 1;
    }

    iniciar() {
        
        console.log(`[${this.contadorAcciones}] Iniciando partida`)

        this.contadorAcciones++;
        return this;
    }

    atacar_a(jugador) {
        console.log(`[${this.contadorAcciones}] ${jugador} ataca`)

        this.jugadores[jugador].vida -= 10;

        console.log(this.jugadores);

        this.contadorAcciones++;
        return this;
    }

    terminar() {
        console.log(`[${this.contadorAcciones}] Terminar partida`)

        this.contadorAcciones++;
        return this;
    }
}

(new Partida({
    'jugador1': new Jugador('Ryan'),
    'jugador2': new Jugador('Tracy')
}))
.iniciar()
.atacar_a('jugador1')
.atacar_a('jugador2')
.atacar_a('jugador2')
.atacar_a('jugador1')
.atacar_a('jugador1')
.terminar()
