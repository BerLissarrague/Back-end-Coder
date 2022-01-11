const fs = require('fs');

class Contenedor {
    constructor(url_archivo){    
        this.archivo = url_archivo;        
    };
   
  
async getAll(){
    try{
      let misProductos = await fs.promises.readFile( `${this.archivo}`, 'utf-8');
      console.log(misProductos);
    }
    catch(err){
        console.log("Error al leer el documento");
    }
};

};

let products = new Contenedor("./productos.txt");
let res= products.getAll();
console.log (res)


  /*
save(product){
    // 1ro leer archivo (productos.txt) filesystem Fs
    // 2do anilizar estrctura si es vacia o no, para generar un id
    // 3ro ingresar el id al producto
    // 4to insertar el producto al final del [ ] 
    // 5to actualizar producto.txt
};  

getById( id ){


};/*
deleteById(id){

};
deleteAll(){

};*/
