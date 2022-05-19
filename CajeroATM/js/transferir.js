function cash1(){
    let CantidadT=parseInt(document.getElementById('Cant').value);
    let Cantidad2=parseInt(document.getElementById('CA').value);
    document.getElementById('CA').value=(Cantidad2+CantidadT);
}

function cash2(){
    let CantidadT=parseInt(document.getElementById('Cant').value);
    let Cantidad1=parseInt(document.getElementById('CC').value);
    document.getElementById('CC').value=(Cantidad1+CantidadT);
}