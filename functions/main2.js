//1.Escribe una función llamada evaluate que reciba como parámetro un número y retorne lo siguiente:
//"Posititvo" si el número es positivo.
//"Negativo" si el número es negativo.
//"Cero" si el numero es cero.

//2. Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante

//3. Realizar un juego de piedra, papel o tijera, en el cual el usuario ingrese su nombre y  la opción que quiera y muestre quien gane

//4. realizar una función con la cual determinen una cadena de texto es palindromo o no

/*
//Ejercicio 1
function evaluate(numero){
    if(numero = +numero) return `Positivo`;
    if(numero = -numero) return `Negativo`;
    if(numero = 0) return `Cero`;
}

evaluate();

//Ejercicio 2
function letra(let){
    this.let = let.toLowerCase();
    if(this.let === 'a' || this.let === 'e' || this.let === 'i' || this.let === 'o' || this.let === 'u') return `Es una vocal.`;
    else return `Es una consonante.`;
}

    

console.log(letra('z'));
*/

//Ejercicio 4
function palindromo(texto){

    //Lectura de texto que inicia de izquierda a derecha
    var textoSinEspacios = [];
    var indice = 0;
    var textoFinal;

    for(var i=0; i<=texto.length; i++){
        if(texto[i] == ' '){

        }
        else{
            textoSinEspacios[indice] = texto[i];
            indice++;
        }
    }

    //Lectura de texto derecha a izquierda
    var indiceAlreves = (textoSinEspacios - 1);

    for(var i=0; i<textoSinEspacios.length; i++){
        if(textoSinEspacios[i] != textoSinEspacios[indiceAlreves]){
            textoFinal = 'La oración no es un palindromo';
        }
        else
        { 
            textoFinal = 'La oración es un palindromo';
    }
    }
    return textoFinal;
}

var texto = prompt('Ingresa una cadena de texto: ');
alert(palindromo(texto));