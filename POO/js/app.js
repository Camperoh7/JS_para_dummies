//Definición de clases de POO
class Vehiculo {
    constructor(marca, modelo, valor, color){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Valor = valor;
        this.Color = color;
        this.Estado = function (estado){
            if(estado == 1){
                return 'El vehívulo se apagó';
            }else{
                return 'El vehículo se encendió';
            }
        }
    }
}

//creamos copia de la clase Vehiculo
let vehiculo1 = new Vehiculo ('Toyota', 2022, 23000, 'Negro');
let vehiculo2 = new Vehiculo('Nissan', 2019, 45000, 'Gris');
let vehiculo3 = new Vehiculo('Ferrari', 2019, 2000000, 'Rojo');

console.log(vehiculo1.Color);
console.log(vehiculo1.Estado(1));
console.log(vehiculo1.Estado(0));

let arregloVehiculos = [vehiculo1, vehiculo2, vehiculo3];

function obtenerNombre(item){
    return item.Marca;
}

//Obtener propiedades con Map
let nombreVehiculos = arregloVehiculos.map(obtenerNombre);

console.log(nombreVehiculos);

function filtroValor (item){
    if(item.Valor <= 200000){
    return item;
    }
}

//Filtrar propiedades con filter
let filtroVehiculos = arregloVehiculos.filter(filtroValor);

console.log(filtroVehiculos);