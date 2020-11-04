        // Cuando vaya escribiendo, se van filtrando los usuarios

        // Variables
        const txtBusqueda = document.querySelector('#txtBusqueda');
        const resultados = document.querySelector('#resultados');
        
        // F - Funciones

        // E - Eventos
        txtBusqueda.addEventListener('input', function() {

            const xhr = new XMLHttpRequest;

            xhr.open('GET', 'https://5fa2faabba0736001613c519.mockapi.io/usuarios');

            xhr.send();

            xhr.addEventListener('load', function() {
                const datos = JSON.parse(xhr.response);
                
                resultados.innerHTML = '';

                const frag = document.createDocumentFragment();

                const d = datos
                .filter(function(val){
                    return val.name.includes(txtBusqueda.value)
                })
                .forEach(function(val){
                    const el = document.createElement('div');
                    el.innerHTML = `${val.id} | <b>${val.name}</b>`;
                    frag.appendChild(el);
                });

                resultados.append(frag);
            });

        });

        // O - Objetos
