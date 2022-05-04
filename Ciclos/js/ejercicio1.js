var numero = Number(prompt('Ingresa un numero'));
var cantidad = 0;
var msg;

if(!isNaN(numero))
{
    if(numero >= 0 && numero % 1 === 0)
    {
        for(var i = numero; i>= 0; i--)
        {
            if(i % 2 === 0)
            document.write(i);
            document.write('<br>');
            cantidad++;
        }
    }

    if(cantidad !==1)
    {
        msg = `Se encontraron ${cantidad} números pares.`;
    }
    else
    {
        msg = `Se encontró solo un numero par.`;
    }
    document.write(msg);
}
else
{
    alert('El numero debe ser un entero mayor que 0.');
}


