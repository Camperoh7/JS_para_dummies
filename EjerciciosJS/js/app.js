
// let x = prompt('Ingresa un número');
// let y = prompt('Ingresa otro número');
// let z = prompt('Ingresa uno más');

// if(x > y && x > z){
//     alert(`El número mayor es ${x}`);
// }else if(y > z){
//     alert(`El número mayor es ${y}`);
// }else{
//     alert(`El número mayor es ${z}`);
// }


// //Divisible x 2

// let n = prompt('Ingresa un número');

// if(n %2 === 0){
//     alert('El número es divisible por 2');
// }else{
//     alert('El número no es divisible entre 2');
// }


// //Cuántas veces aparecen vocales

// var text = prompt("Escribe una frase");
// var nText = text.length;
// var i;

// for(i = 0; i <= nText; i++){
//     if(text.substring(i,1) === "a" || text.substring(i,1) === "e" || text.substring(i,1) === "i" || text.substring(i,1) === "o" || text.substring(i,1) === "u"){
//     document.write(text.substring(i,1));
//     }
// }


// function MiVocal(a,e,i,o,u){
//     let vocales = ['a','e','i','o','u'];
//     let k;
//     let numVocales = vocales.length;

//     for(k = 0; k <= 4; k++){
//         frase = prompt('Pon una frase:');
//         numVocales === frase.substring();
//         if(vocales === numVocales){
        
//     }if(frase.substring() === a,e,i,o,u){
//         k++
//         console.log(a,e,i,o,u);

//     }
// }
// }
// MiVocal('a','e','i','o','u');
var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var menor;
var i;
if (n1 < n2) {
menor = n1;
} else {
menor = n2;
}
for (i=2; i < menor / 2; i++) {
if (n1 % i === 0 && n2 % i === 0) {
document.write(i,", ");
}
}