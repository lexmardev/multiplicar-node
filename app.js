const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');
// Se puede de dos maneras para utilizar solo el objeto y no todo el elemento
// const argv = require('./config/yargs').argv;
const { argv } = require('./config/yargs');

//Utilizar colores en la consola
const colors = require('colors/safe');

// Toma parametros de la consola forma manual
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearTabla(base)
//     .then(resp => console.log(`Archivo creado ${ resp }`))
//     .catch(err => console.log(err));


//Utilizando yargs
console.log(argv);
console.log(argv.base);
console.log(argv.limite);

//Obtener comando con yargs
// node app crear los comandos son los que no llevan --
// los parametros son los que llevan -- ó - 
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearTabla(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado`, colors.green(resp))) // Nombre del archivo en diferente color
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
};