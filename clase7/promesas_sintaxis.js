      // NO LINEAL = VARIOS PASOS A LA VEZ, INDEPENDIENTES
      // VS
      // LINEAL = UNO SOLO PASO A LA VEZ

      // Multihilo = API Worker

      // Promesas
        // Operación asincrónica que puede ser resuleta o rechazada
        
      // 1. Crear la promesa
      // ¿CUANDO está resuelta o rechazada?
      const promesaSanguche = new Promise(function(resolver, rechazar){
        if(confirm('Hola Jonathan! Ya te trajeron el sanguche?')) {
            resolver();
        } else {
            rechazar();
        }
      });

      // 2. Usar la promesa
      // ¿QUÉ SUCEDE cuando está resuelta o rechazada?
      promesaSanguche
      .then(function(){
        alert('Wiiii');  
      })
      .catch(function(){
          alert('Tengo hambre');
      })