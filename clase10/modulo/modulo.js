/**
 * 
 * Patrón Módulo  
 * 
*/

const modulo = (function(){

    const mensaje = 'Hola mundo';

    let public = {
        getMensaje() {
            return mensaje;
        }
    }

    /**
     * El retorno de la función
     * es lo único que se exporta
     * al resto del código
     */
    return public;

})();

console.log(modulo.mensaje);

