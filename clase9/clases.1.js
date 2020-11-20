        // Programación Orientada a Objetos basada en Prototipos en JavaScript
        // ¿Cómo creo un nuevo objeto? 

        // Los objetos se crean a partir de otros objetos

        var numero1 = 20;
        // .Net (Basados en CLASES y Fuertemente Tipados)

        // TypeScript => Le pone Tipos Fijos a JavaScript


        // UNA NUEVA SINTAXIS

        // Lo que puedo hacer con Prototipos, lo puedo hacer con clases
        // Lo que NO puedo hacer con Prototipos, no lo puedo hacer con clases

        class Persona {

            constructor() {
                // 1) Se llama al consturctor de la clase padre
                // en caso de ser necesario

                // 2) Se declaran las PROPIEDADES (Atributos) del
                // objeto
                this.nombre = 'Carla';
                this.apellido = 'Lorenzo';

                // 3) Se efectúan operaciones de inicialización

            }

            // Métodos
            saludar() {
                console.log('Hola, soy '+this.nombre);
            }

        }

        const carla = new Persona();
        carla.saludar();
