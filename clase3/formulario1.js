const txtUsuario = document.querySelector('#txtUsuario');
const txtClave = document.querySelector('#txtClave');
const frmLogin = document.querySelector('#frmLogin');

// Evento
frmLogin.addEventListener('submit', function(ev){
    ev.preventDefault(); // CANCELAR EL SUBMIT
    
    // Validaciones aquí
    let enviarFormulario = true;
    
    // Pub-Sub
    let errores = [];
    
    // Subscribir
    if(txtUsuario.value === '') errores.push('El usuario está vacío');
    if(!/^[a-zA-Z0-9]{8,20}$/.test(txtUsuario.value)) errores.push('La clave tiene un formato inválido');
    if(txtClave.value === '') errores.push('La clave está vacía');
    if(txtClave.value.length < 3) errores.push('La clave es demasiado corta');
    else if(txtClave.value.length > 10) errores.push('La clave es demasiado larga');
    
    // Publicar
    if(errores.length === 0) {
        frmLogin.submit(); // EJECUTAR EL SUBMIT
    } else {
        console.log(errores);
    }
});