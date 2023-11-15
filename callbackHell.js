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

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('bla, bla, bla');
        callbackHablar();
    }, 1000);
}

function platicar(nombre, veces, callback){
    if(veces > 0){
        hablar(() => {
            platicar(nombre, --veces, callback)
        });
    }else{
        adios(nombre, callback);
    }
}

hola('Sergio', (nombre) =>{
    platicar(nombre, 5, () => {
        console.log('Proceso terminado...');
    });
});