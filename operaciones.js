const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = {nombre, edad, tipo, color, enfermedad} ;
    const oldCita = fs.readFileSync('citas.json', 'utf8');
    const citas = JSON.parse(oldCita);
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas), 'utf8');
    console.log('Cita registrada con éxito.');
}

const leer = () => {
        const json = fs.readFileSync('citas.json', 'utf8');
        const citas = JSON.parse(json);
        if (citas.length > 0) {
            console.log('Citas registradas:');
            console.log(citas);
        } 
        else {
            console.log('No hay citas registradas.');
        }
};

module.exports = { registrar, leer };
