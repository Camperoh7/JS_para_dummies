const terminos = document.getElementById('terminos');

function login(form){
    if(form.u.value=="gibranh7"){
        if(form.c.value=="123321atm"){
            if(terminos.checked){
        location="opciones.html";
        }}else{
            document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
        }
    }else{
        document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
    }
    if(form.u.value=="tam99"){
        if(form.c.value=="1234"){
            if(terminos.checked){
                location="opciones.html";
            }
        }
    }
    if(form.u.value=="juanito100"){
        if(form.c.value=="4321"){
            if(terminos.checked){
                location="opciones.html";
            }
        }
    }
}

let htmlInicio = '<button onclick="crearCuenta()">Crear cuenta</button>';








