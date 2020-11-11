/**
 * Version 1: Carga una sola imagen
 */
(function() {
    // CORS: Cross-Origin Resource Sharing
    const imagenes = [
        'img/img1.jpg', 
        'img/img2.jpg', 
        'img/img3.jpg', 
        'img/img4.jpg', 
        'img/img5.jpg' 
    ];

    const imagen = imagenes[0];


    const xhrImagen = new XMLHttpRequest;

    // Un paso extra: Configurar el XHR
    xhrImagen.responseType = 'blob'; // Indica el PROCESAMIENTO del CONTENIDO de la respuesta

    xhrImagen.open('GET', imagen);

    xhrImagen.send();

    xhrImagen.addEventListener('load', () => {
        // xh.response = CONTENIDO + PROCESAMIENTO
        // El Blob representa un archivo binario cargado en la memoria
        // del navegador al ejecutarse el programa.
        // Luego, obtengo una URL con el Blob cargado en memoria
        const urlEnMemoria = URL.createObjectURL(xhrImagen.response);
        // Finalmente, al contar ya con una URL, puedo crear
        // la imagen con normalidad.
        const divImagen = document.querySelector('#imagen');
        const img = document.createElement('img');

        img.src = urlEnMemoria;

        divImagen.appendChild(img);
    });


})();

