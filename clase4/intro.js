        /*
        Programación Lineal / Un solo hilo / Sincrónica
        INICIA EL PROGRAMA
        a = 1
        b = 2
        c = a + b
        mostrar c
        FIN DEL PROGRAMA
        */
        /*
        alert('Hola mundo');

        console.log('Adios bb');
        */

        // Modelo ASINCRÓNICO -orientado a eventos-

        setTimeout(function(){
            console.log('Hola al cabo de tres segundos');
        }, 3000);
        console.log('Hola mundo');

        /*
        window => PROCESO PRINCIPAL
        
            document (DOM) => Proceso de carga de la página HTML

            DOM -sT -cL(Hola Mundo)
                ASINCRÓNICO (EN EL MISMO HILO, "A DESTIEMPO")
                sT ------------------> cL(Hola...)
                        3 seg

        Workers => OTRO PROCESO (MULTIHILO)
        */