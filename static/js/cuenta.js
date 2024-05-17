//console.log('Adentro de la aplicación');

var listaPersonas = [];

document.addEventListener("DOMContentLoaded", () => {
    const listaSerializada = localStorage.getItem('per');
    if (listaSerializada) {
        listaPersonas = JSON.parse(listaSerializada);
        console.log('Personas cargadas desde localStorage:', listaPersonas);
    }
});

function Datos() {
    var cedula = document.getElementById("cedula").value;
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contrasena").value;
    const persona = new Persona(cedula, nombre, email, contraseña);
    persona.mostrar();
    persona.guardar();
}

class Persona {
    constructor(cedula, nombre, email, contraseña) {
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

    guardar() {
        const personaObj = {
            cedula: this.cedula,
            nombre: this.nombre,
            email: this.email,
            contraseña: this.contraseña
        };

        listaPersonas.push(personaObj);
        const listaSerializada = JSON.stringify(listaPersonas);
        localStorage.setItem('per', listaSerializada);
        console.log('Lista actualizada de personas:', listaPersonas);

        for (let index = 0; index < listaPersonas.length; index++) {
            const per = listaPersonas[index];
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
