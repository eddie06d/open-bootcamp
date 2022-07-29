let nombre = "Eddie";
let apellidos = "Huancahuire Velasquez";

let estudiante = `${nombre} ${apellidos}`;

let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let length = estudiante.length;

let first = nombre.charAt(0);

let last = apellidos.charAt(apellidos.length - 1);

console.log(estudiante.replace(/\s/g, ""));

let bool = estudiante.includes(nombre);