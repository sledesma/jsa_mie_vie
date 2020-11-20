class Template {
    constructor(selector) {
        this.template = document.querySelector(selector);
    }

    getHtmlOutput(data) {
        let resultado = this.template.innerHTML;

        Object.keys(data).forEach(prop => {
            resultado = resultado.replace(`%${prop}%`, data[prop]);
        });
        
       return resultado;
    }
}

class SearchBox {
    constructor(selector) {
        this.selector = selector;
        this.element = document.querySelector(this.selector);
    }

    on(evento, callback) {
        this.element.addEventListener(evento, callback);
    }
}

const cardTemplate = new Template('#card');
const buscar = new SearchBox('#txtBuscar');
buscar.on('input', function(e){
    document.querySelector('.grilla').innerHTML = cardTemplate.getHtmlOutput({
        titulo: 'Desde el input',
        descripcion: e.target.value
    });
});