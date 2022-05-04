//1.Escribe una función llamada evaluate que reciba como parámetro un número y retorne lo siguiente:
//"Posititvo" si el número es positivo.
//"Negativo" si el número es negativo.
//"Cero" si el numero es cero.

//2. Escribe una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante

//3. Realizar un juego de piedra, papel o tijera, en el cual el usuario ingrese su nombre y  la opción que quiera y muestre quien gane

//4. realizar una función con la cual determinen una cadena de texto es palindromo o no

/*function evaluate(n,n1,n2){
    evaluate = n,n1,n2
    for(n = 0; n ; n++){
        console.log('El número es positivo');
    }
    if(evaluate == n1){
    for(n1=-1; n1 <= -10; n1++){
        console.log('El número es negativo');
    }
}
}


evaluate();
*/

function letra(let){
    this.let = let.toLowerCase();
    if(this.let === 'a' || this.let === 'e' || this.let === 'i' || this.let === 'o' || this.let === 'u') return `Es una vocal.`;
    else return `Es una consonante.`;
}

    

console.log(letra('z'));