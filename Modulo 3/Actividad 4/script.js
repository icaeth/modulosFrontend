const nombre = document.getElementById('data-nombre')
const apellido = document.getElementById('data-apellido')
const telefono = document.getElementById('data-telefono')
const email = document.getElementById('data-email')
const form = document.getElementById('form')
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const textRegExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const telefonoRegExp = /^[9]\d{8}$/;


/* Listener formulario */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let mensajes = [];

    /* validar que el campo no esté vacio */
    if (nombre.value === '' || nombre.value == null) {
        /* ingresa un mensaje de error al array */
        mensajes.push('Debes ingresar un nombre');
    }
    /* Validar número de caracteres */
    if (nombre.value.length >= 30) {
        mensajes.push('Nombre no debe superar los 30 caracteres');
    }

    if (textRegExp.test(nombre.value) == false) {
        mensajes.push('Debes ingresar un nombre valido\n ejemplo = Gustavo\n');
    }

    if (apellido.value === '' || apellido.value == null) {
        mensajes.push('Debes ingresar un apellido');

    }

    if (apellido.value.length >= 80) {
        mensajes.push('Nombre no debe superar los 80 caracteres');
    }

    if (textRegExp.test(apellido.value) == false) {
        mensajes.push('Debes ingresar un nombre valido\n ejemplo = Pérez\n');
    }

    if (email.value === '' || email.value == null) {
        mensajes.push('Debes ingresar un email');
    }

    if (emailRegExp.test(email.value) == false) {
        mensajes.push('Debes ingresar un email válido\n ejemplo = correo@gmail.com\n');
    }

    if (email.value.length >= 50) {
        mensajes.push('Nombre no debe superar los 50 caracteres');
    }

    if (telefono.value === '' || telefono.value == null) {
        mensajes.push('Debes ingresar un email');
    }

    if (telefonoRegExp.test(telefono.value) == false) {
        mensajes.push('Debes ingresar un telefono válido y debe comenzar con 9\n ejemplo = 987772873\n');
    }

    if (telefono.value.length != 9) {
        mensajes.push('El teléfono debe tener 9 números 977774444');
    }



    /* determina si hay mensajes de error */
    if (mensajes.length > 0) {
        /* evita el comportamiento por defecto */
        e.preventDefault();
        /* muestra los mensajes de error en un alert */
        alert(mensajes.join('\n'));
    } else {
        $('.nombre').replaceWith(`<p>${nombre.value}</p>`)
        $('.apellido').replaceWith(`<p>${apellido.value}</p>`)
        $('.email').replaceWith(`<p>${email.value}</p>`)
        $('.telefono').replaceWith(`<p>${telefono.value}</p>`)
    }
})



