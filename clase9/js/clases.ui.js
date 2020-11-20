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