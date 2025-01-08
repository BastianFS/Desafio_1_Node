

const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2];
console.log(operacion);
const argumentos = process.argv.splice(2);

const nombre = argumentos[0];
const edad = argumentos[1];
const tipo = argumentos[2];
const color = argumentos[3];
const enfermedad = argumentos[4];

if(operacion === 'registrar'){
    registrar(nombre, edad, tipo, color, enfermedad)
}
else if(operacion === 'leer'){
    leer()
}
else{
    console.log("operación incorrecta, use 'registrar' o 'leer'.")
}
