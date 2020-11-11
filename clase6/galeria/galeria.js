/**
 * Version 2: Carga varias imágenes a la vez
 */
(function() {
    const 
        btnPrev = document.querySelector('#btnPrev'),

        btnSig = document.querySelector('#btnSig'),

        divImagen = document.querySelector('#imagen');
        
        imagenes = [
            'img/img1.jpg', 
            'img/img2.jpg', 
            'img/img3.jpg', 
            'img/img4.jpg', 
            'img/img5.jpg' 
        ],
        
        imgPorPag = 2;
        
    
    let 
        pagActual = 0,
        
        indiceInicial = 0,

        pag = [];

        
    function procesarPragina() {
        divImagen.innerHTML = "";

        indiceInicial = pagActual * imgPorPag,

        pag = [
            imagenes[indiceInicial],
            imagenes[indiceInicial + 1]
        ];

        pag.forEach(function(img){
            console.log()
            cargarImagen(img);
        });
    }
    function cargarImagen(url) {
        const xhrImagen = new XMLHttpRequest;
        xhrImagen.responseType = 'blob';
        xhrImagen.open('GET', url);
        xhrImagen.send();
        xhrImagen.addEventListener('load', () => {
            const urlEnMemoria = URL.createObjectURL(xhrImagen.response);
            
            const img = document.createElement('img');
            img.src = urlEnMemoria;
            divImagen.appendChild(img);
        });
    }

    // Listeners
    btnPrev.addEventListener('click', () => {
        pagActual--;
        procesarPragina();       
    });

    btnSig.addEventListener('click', () => {
        pagActual++;
        procesarPragina();
    });

    // Iniciar
    document.addEventListener('DOMContentLoaded', () => {
        procesarPragina();
        // "Equivalente" a $(document).ready()
    });
    
})();

