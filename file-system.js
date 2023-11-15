const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());
    });
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (error) => {
        if(error){
            console.log('No se ha podido escribir el archivo');
        }else{
            console.log('Archivo escrito correctamente');
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, (error) => {
        if(error){
            console.log('Ha sucedido un error')
        }else {
            console.log('Borrado correctamente');
        }
    })
}

// leer(__dirname+'/archivo.txt', console.log);
// escribir(__dirname + '/nuevo.txt', 'Soy un archivo nuevo', console.log);
borrar(__dirname + '/nuevo.txt', console.log);