//function sumatoria(num1,num2){
//    var total = num1 + num2;
//    return 'La suma total es:' + total;
//}

//console.log(sumatoria(7,9));
/*
function resta(n1,n2,n3){
    var solucion = n1 - n2 -n3;
    console.log('La resta es:' + solucion);
}

resta(50,30,10);

/*tabla de multiplicar
console.log('1 x 0 =', 2 * 0);
console.log('1 x 1 =', 2 * 1);
console.log('1 x 2 =', 2 * 2);
console.log('1 x 3 =', 2 * 3);
console.log('1 x 4 =', 2 * 4);
console.log('1 x 5 =', 2 * 5);
console.log('1 x 6 =', 2 * 6);
console.log('1 x 7 =', 2 * 7);


//funcion multiplicación
function TablaMultiplicar(){
    for(x = 0; x < 10; x++){
        console.log('2 x', x, '=', 2 * x);
    }
}

TablaMultiplicar();

function suma(num1,num2,num3){
    var total = num1 + num2 + num3;

    return 'El resultado es:' + total;
}

var valorSuma = suma(9,8,6);
document.write(valorSuma);

function saludar(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
    console.log('Hola mi nombre es: ' + this.nombre + ' y tengo: ' + this.edad + ' años' );
}

saludar('Gibran',22);
*/

function MayorDeEdad(edad){
    if(edad > 18){
        console.log('El usuario es mayor de edad');
    }
    else{
        console.log('El usuario es menor de edad');
    }
    if(edad>100){
        console.log('El usuario no existe')
    }
}

MayorDeEdad(199);