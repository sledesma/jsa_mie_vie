const endpoint = search => `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f9963bb74c87d9d4cb8f029823f3217b`;

function Result() {
    console.log('Inicializando un nuevo Resultado', this);
}
Result.prototype = {
    coord: {
        lon: 0,
        lat: 0
    },
    weather: [],
    base: '',
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0
    },
    clouds: {
        all: 0
    },
    dt: 0,
    sys: {
        type: 1,
        id: 0,
        country: '',
        sunrise: 0,
        sunset: 0
    },
    timezone: 0,
    id: 0,
    name: '',
    cod: 0,
    toHtml: function() {

        return `
            <div>

                <div>
                    <h3>Coordenadas</h3>
                    Latitud: ${this.coord.lat} | Longitud: ${this.coord.lon}
                </div>

            </div>
        `;

    },

    fill: function(base) {
        const campos = Object.keys(base)
        campos.forEach(key => {
            this[key] = base[key];
        });
    }
};

const txtBusqueda = document.querySelector('#txtBusqueda');
const btnBuscar = document.querySelector('#btnBuscar');
const resultados = document.querySelector('#resultados');

btnBuscar.addEventListener('click', () => {

    const val = txtBusqueda.value;

    fetch(endpoint(val))
    .then(res => res.json())
    .then(data => {

        const aux = new Result();
        aux.fill(data);
        
        resultados.innerHTML = aux.toHtml();
    });

});