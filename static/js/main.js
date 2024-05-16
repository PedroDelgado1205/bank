console.log('Adentro de la aplicación');

var listaPersonas = []; // Definir listaPersonas como una variable fuera de la clase Persona

function Datos(){
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contrasena").value;
    const persona = new Persona(cedula, nombre, email, contraseña);
    persona.mostrar();
    persona.guardar(persona);
}

class Persona{
    constructor(cedula, nombre, email, contraseña){
        this.cedula = cedula;
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    mostrar() {
        console.log(`
Nombre: ${this.nombre}
Cedula: ${this.cedula}
Email: ${this.email}
Contraseña: ${this.contraseña}
                    `);
    }

    guardar(persona){
        const _persona = {
            cedula : persona.cedula,
            nombre : persona.nombre,
            email : persona.email,
            contraseña : persona.contraseña
        }
        console.log(_persona);
        listaPersonas.push(_persona);
        const listaSerializada = JSON.stringify(listaPersonas)
        console.log(listaSerializada)
        localStorage.setItem('per', JSON.stringify(listaSerializada));
        const listaDeserializada = JSON.parse(listaSerializada)
        
        for (let index = 0; index < listaDeserializada.length; index++) {
            const per = listaDeserializada[index];
            console.log(`
-------------------------------------
Cedula: ${per.cedula}
Nombre: ${per.nombre}
Email: ${per.email}
Contraseña: ${per.contraseña}
`);
        }
    }
}
