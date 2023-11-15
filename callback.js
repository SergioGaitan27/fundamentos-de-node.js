function hola(nombre, callback){
    setTimeout(() => {
        console.log('Hola ' + nombre);
        callback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso...');
hola('Sergio', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso....');
    })
});
