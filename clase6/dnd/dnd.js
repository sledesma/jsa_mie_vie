(function({ dropzone }){

    const
        initialContent = dropzone.innerHTML;

    let
        state = [];


    function mapStateToDropzone() {
        if(state.length === 0) {
            dropzone.innerHTML = initialContent;
            return;
        }

        // Hay imagenes que mapear

        let elems = state.map(function(item){
            const el = document.createElement('div');
            const a = document.createElement('a');
            a.href = item.url;
            a.target = '_blank';
            a.innerHTML = item.name;
            el.appendChild(a);
            return el;
        });

        const frag = document.createDocumentFragment();

        elems.forEach(el => frag.appendChild(el));

        dropzone.innerHTML = '';
        dropzone.append(frag);
        
    }

    function addItem(id, name, url) {
        state.push({
            id: id,
            name: name,
            url: url
        })
    }

    function imageExists(name) {
        return state.find(function(item){
            return item.name === name;
        });
    }

    function listeners() {
        dropzone.addEventListener('dragover', e => {
            e.preventDefault();
        });

        dropzone.addEventListener('drop', e => {
            e.preventDefault();

            const files = e.dataTransfer.files;

            for(let i = 0; i < files.length; i++) {
                if(!imageExists(files[i].name))
                    addItem(
                        i,
                        files[i].name,
                        URL.createObjectURL(files[i])
                    )       
                else
                    if(confirm('El archivo ya existe ¿Desea cargarlo igualmente?'))
                        addItem(
                            i,
                            files[i].name,
                            URL.createObjectURL(files[i])
                        )   
            }

            mapStateToDropzone();
        });

    }

    function init() {
        listeners();
        mapStateToDropzone();
    }

    init();
})({
    dropzone: document.querySelector('#imagenes-zone')
})