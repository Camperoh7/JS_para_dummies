var nombreCompleto = prompt('Ingresa tu nombre.');
var meAmas = prompt('Dime si me amas: S o N.');
var msg;

if(nombreCompleto.toUpperCase() == '' && meAmas.toUpperCase() == ''){

    if(meAmas.toUpperCase() === 'S'){
    alert(`Yo también te amo <3 ${nombreCompleto}.`)
    }

        if(meAmas.toUpperCase() === 'N'){
            alert(`Lo siento, no te amo ${nombreCompleto}.`)
        }
}else{
    alert('Ups, rellena los datos correctamente para continuar...');
}
    






