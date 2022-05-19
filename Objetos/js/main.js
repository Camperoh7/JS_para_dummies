let vehiculo = {
    marca : 'Toyota',
    color : 'verde',
    modelo : 2022,
    Tipo : 'Sedan',
    Valor : 1200000,
    TipoLlanta : ['Pireli', 'Michelin', 'Goodyear'],
    enStock : true,
    Estado : function (estado){
        if(estado == 1){
            return 'El vehículo se apagó';
        }else{
            return 'El vehículo se encendió';
        }
    },
    Mantenimiento : (estado) =>
        estado == 1 ? console.log('El vehículo ya terminó su mantenimiento') : console.log('El vehículo necesita mantenimiento')
}

console.log('El vehículo es de marca: ' + vehiculo.marca + ' y tiene el valor de $ ' + vehiculo.Valor);

//Desestructuración de objetos
const {Valor, Tipo, modelo, color, marca} = vehiculo;
console.log(`El vehículo es de color: ${color} y es del año ${modelo}`);

//Acceder arreglo dentor de una propiedad
console.log(vehiculo.TipoLlanta[1]);
console.log(vehiculo.Estado(0));
console.log(vehiculo.Mantenimiento(1));
console.log(vehiculo.Mantenimiento(0));