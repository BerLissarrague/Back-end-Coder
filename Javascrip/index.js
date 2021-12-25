class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
}

let librosArr = [];

let usuarioNuevo = new Usuario("Ismael","Sosa",
    [
            {   nombreLibro: "Lo que el viento se llevo",
                autor: "Margaret Mitchell"
            },
            {   nombreLibro: "El principito",
                autor: "Antoine de Saint-Exupéry"
            }
          ],
    ["pero","gato","pez"]
);

console.log(getFullName());
addMascota("pajaro");
console.log(countMascotas());
addBook("Book1","Autor1");
getBookNames();
console.log(librosArr);
console.log(usuarioNuevo);

//funciones
function getFullName() {
    return (`El nombre es ${usuarioNuevo.nombre}, ${usuarioNuevo.apellido}`);
};

function addMascota(nombreMascota) {
    usuarioNuevo.mascotas.push(nombreMascota);
    return;
};

function countMascotas() {
    return usuarioNuevo.mascotas.length;
};

function addBook(nombreLibro, autor) {
    usuarioNuevo.libros.push({nombreLibro, autor});
    return;
};

function getBookNames() {
    usuarioNuevo.libros.forEach((element) =>{       
        librosArr.push(element.nombreLibro);     
    });
    return;
};
