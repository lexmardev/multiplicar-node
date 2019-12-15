const params = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar en la consola', params)
    .command('crear', 'Crea la tabla de multiplicar en un archivo txt', params)
    .help()
    .argv;

// Se debe exportar el argv para usarlo en el proyecto
module.exports = {
    argv
}