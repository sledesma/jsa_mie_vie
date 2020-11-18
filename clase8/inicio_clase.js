        // API => Objeto JS
        // Objetos
        // POO basada en prototipos (classless)
        
        /// ¿Cómo crear un nuevo objeto? ///
        /// A PARTIR DE PROTOTIPOS (Otros Objetos)

        // DOS PARADIGMAS
        /// 1) Crear un nuevo objeto a partir de un modelo teórico (POO basada en clases)
        /// 2) Crear un nuevo objeto a partir de otro objeto (POO classless) <= JS


        const Persona = {
            nombre: '',
            apellido: '',
            edad: 0,
            mostrar: function() {
                console.log(this);
            },
            asignar: function(_nombre, _apellido, _edad) {
                this.nombre = _nombre;
                this.apellido = _apellido;
                this.edad = _edad;
            },
            toArray: function() {
                return [
                    this.nombre,
                    this.apellido,
                    this.edad
                ];
            }
        };

        const Carla = Object.create(Persona); // Herencia
        Carla.asignar('Carla', 'Lorenzo', 10)
        Carla.mostrar();

        const Pedro = Object.create(Persona); // Herencia
        Pedro.asignar('Pedro', 'Lorenzo', 13)
        Pedro.mostrar();

        console.log(Pedro.toArray());
