//Ejemplo de While
var nombreCompleto = prompt('Ingresa tu nombre completo');
var letraBuscar = prompt('Ingresa la letra que quieres saber cuantas veces aparece en tu nombre');
var i = 0;
var letraActual;
var cantidad = 0;

while(i <= nombreCompleto.length)
{
    //Substring permite extraer una cantidad de carácteres específica de un string
    letraActual = nombreCompleto.substring(i,i + 1)

    //Validamos si la letra es igual a la que pidio el usuario
    if(letraActual.toLowerCase() === letraBuscar.toLowerCase())
    {
        //Variable contador forma más utilizada
        cantidad ++;
    }
    //Variable contador forma básica
    i = i + 1;
}

document.write(`La letra ${letraBuscar}, aparece ${cantidad} veces en tu nombre.`);