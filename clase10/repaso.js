/*
const Logeable = {
    log: function(prop) {
        console.log(this[prop]);
    }
}

const Personaje = Object.create(Logeable);
Personaje.vida = 100;

// Creando un nuevo jugador basado en Personaje
const Jugador = Object.create(Personaje);
Jugador.vida = 250;
Jugador.ataque = 100;

Jugador.log('ataque');
*/

class Logeable {
    log(prop) {
        console.log(this[prop]);
    }
}

class Personaje extends Logeable {
    constructor() {
        super();
        this.vida = 100;
    }
}

class Jugador extends Personaje {
    constructor() {
        super();
        this.vida = 250;
        this.ataque = 100;
    }
}

const sebas = new Jugador();
sebas.log('vida');
sebas.log('ataque');