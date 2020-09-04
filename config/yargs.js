const descripcion = {
	alias: 'd',
	demand: true,
	desc: 'Descripcion de la tarea por hacer'
};

const completado = {
	default: true,
	alias: 'c',
	desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')  
	.command('crear', 'Crear un elemento por hacer', {
		descripcion
	})
	.command('actualizar', 'actualiza el estado completado de una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'borra una tarea por hacer',{
		descripcion
	})
	.help()
  .argv;

module.exports = {
	argv
}
