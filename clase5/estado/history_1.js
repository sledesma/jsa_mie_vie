
        /*
        ESTADO TITULO URL
        {}              /
        {click: ''}     /click
        */        
       document.querySelector('button').addEventListener('click', function(){
        history.replaceState({ultima: new Date}, '');
        console.log(history.state);
    });

    window.addEventListener('popstate', function(e){
        console.log(e.state);
    });

    /*
    ¿Para que sirve?
        Navegación entre páginas AJAX

    ¿Que ofrece?
        Ofrece un objeto window.history, el cual permite leer y escribir una
        variable vinculada a eventos del historial (como el boton atras
        o adelante) llamada 'state'

    ¿Como se implementa?
        Leer el estado
            history.state
            window.onpopstate
        Escribir el estado
            history.pushState
            history.replaceState
    */
