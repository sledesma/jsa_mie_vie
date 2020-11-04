        /*
        MINI-Back end en:  
            1) PHP
            2) Express
            3) JsonPlaceHolder
        */

        // Peticion HTTP
        // XMLHttpRequest
        // Asyncronimous Javascript And Xml (JSON)

        // 1) Crear la petición
        const xhr = new XMLHttpRequest;

        // 2) Abrir la conexión
        xhr.open('GET', 'https://5fa2faabba0736001613c519.mockapi.io/usuarios');

        // 3) Enviar la petición
        xhr.send();
        ///////// ACA HAY UN TIEMPOO //////////////
        // 4) Recibir la respuesta
        xhr.addEventListener('load', function(){
            console.log('Hemos recibido los datos: ', JSON.parse(xhr.response));
        });
