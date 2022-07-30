let listaCompra = ["fideos", "carne", "pollo", "leche", "huevos"];

listaCompra.push("Aceite de Girasol");

listaCompra.pop();

let peliculasFavoritas = [
    { titulo: "El Señor de los Anillos", director: "Peter Jackson", fecha: new Date(2001, 11, 11) },
    { titulo: "El Hobbit", director: "Peter Jackson", fecha: new Date(2012, 6, 15 ) },
    { titulo: "El Padrino", director: "Francis Ford Coppola", fecha: new Date(1972, 11, 24) },
];

let peliculasFilter = peliculasFavoritas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1));

let directores = peliculasFavoritas.map(pelicula => pelicula.director);

let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

let directoresYtitulos1 = directores.concat(titulos);

let directoresYtitulos2 = [...directores, ...titulos];