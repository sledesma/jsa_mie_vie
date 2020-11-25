const getNumeroRandom = (function(){


    let numero = null;


    function get() {
        if(numero === null) {
            console.log('Creando numero random');
            numero = Math.random()*10;
        }
        return numero;
    }


    return get;

})();

console.log(getNumeroRandom());
console.log(getNumeroRandom());
console.log(getNumeroRandom());