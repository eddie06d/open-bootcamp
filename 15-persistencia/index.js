let nombre = "Eddie";
let apellidos = "Huancahuire Velasquez";

let obj = { nombre, apellidos };

sessionStorage.setItem("obj", JSON.stringify(obj));

localStorage.setItem("obj", JSON.stringify(obj));

document.cookie = "obj=Nombre;expires=" + new Date(new Date().getTime() + 120000).toUTCString(); // 1seg = 1000ms -> 1min = 60000ms -> 2min = 120000ms