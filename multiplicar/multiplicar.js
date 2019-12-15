// Requireds
const fs = require('fs');
const colors = require('colors');

crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${ base } o ${ limite } no es un numero`)
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${ base } * ${ index } = ${ base * index}\n`;
        }

        //Crea el archivo en la raiz del proyector recibe el nombre y los datos y callback de error
        // en el nombre poner el path
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }`);
        });
    });
}

let listarTabla = (base, limite) => {
    if (!Number(base) || !Number(limite)) {
        reject(`El valor introducido ${ base } o ${ limite } no es un numero`);
        return;
    }
    console.log('======================================='.green);
    console.log(`============ Tabla del ${ base } ==============`.green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`);
    }
    console.log('======================================='.green);
    return;
}

module.exports = {
    crearTabla,
    listarTabla
}