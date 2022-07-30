class Estudiante {
    asignaturas = ["Javascript", "HTML", "CSS"];

    constructor(nombre) {
        this.nombre = nombre;
    }

    obtenDatos() {
        return { 
            nombre: this.nombre, 
            asignaturas: this.asignaturas 
        };
    }
}

let estudiante = new Estudiante("Eddie");
console.log(estudiante.obtenDatos());