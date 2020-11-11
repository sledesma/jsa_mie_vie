(function(){

    const 
        imagenesZone = document.querySelector('#imagenes-zone');
    
    let 
        imagenesZoneHtmlInitState = ''+imagenesZone.innerHTML;

    imagenesZone.addEventListener('dragover', e => {
        e.preventDefault();
        imagenesZone.innerHTML = '';
    });

    imagenesZone.addEventListener('dragleave', e => {
        imagenesZone.innerHTML = imagenesZoneHtmlInitState;
        console.log(imagenesZoneHtmlInitState);
    });

    imagenesZone.addEventListener('drop', e => {
        e.preventDefault();
        const archivos = e.dataTransfer.files;

        for(let i = 0; i < archivos.length; i++) {
            console.log(URL.createObjectURL(archivos[i]));
        }
    });

})();