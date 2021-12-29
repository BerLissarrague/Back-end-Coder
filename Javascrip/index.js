class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    //Funciones
    getFullName() {
        return (`El nombre es ${this.nombre}, ${this.apellido}`);
    };

    addMascota(nombreMascota) {
        mascotas.push(nombreMascota)
        return;
    };

    countMascotas() {
        return mascotas.length;
    };

    addBook(nombreLibro, autor) {
        libros.push({
            nombreLibro,
            autor
        });
        return;
    };

    getBookNames() {
        let librosArr = [];
        libros.forEach((e) => {
            librosArr.push(e.nombreLibro);
            console.log(librosArr)
        });
        return;
    };
}

let usuarioNuevo = new Usuario(
    this.nombre = "Ismael",
    this.apellido = "Sosa",
    this.libros = [
        {
            nombreLibro: "Lo que el viento se llevo",
            autor: "Margaret Mitchell"
        },
        {
            nombreLibro: "El principito",
            autor: "Antoine de Saint-Exupéry"
        }
    ],
    this.mascotas = ["Perro", "Gato", "Peces"]
);

console.log(usuarioNuevo);
console.log(usuarioNuevo.getFullName());
usuarioNuevo.addMascota("Loro");
console.log(usuarioNuevo.countMascotas());
usuarioNuevo.addBook("Book1","Autor1");
usuarioNuevo.getBookNames();
