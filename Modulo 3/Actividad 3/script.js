fetch('formulario.json')
    .then(res => res.json())
    .then(data => campi = data)
    .catch(err => console.log(err))

setTimeout(function () {
    let edad = campi.campos.campo2
    let nombre = campi.campos.campo1
    $('.edad').append(edad)
    $('.nombre').append(nombre)
}, 2000);


/* Validaciones */

const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const edadRegExp = /\s[0-1]{1}[0-9]{0,2}/;
const textRegExp = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const form = document.getElementById('form');


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


    if (edad.value === '' || edad.value == null) {
        mensajes.push('Debes ingresar un email');
    }

    if (edadRegExp.test(edad.value) == false) {
        mensajes.push('Debes ingresar una edad valida');
    }

    if (edad.value.length >= 3) {
        mensajes.push('No aparezcas Matusalén');
    }



    /* determina si hay mensajes de error */
    if (mensajes.length > 0) {
        /* evita el comportamiento por defecto */
        e.preventDefault();
        /* muestra los mensajes de error en un alert */
        alert(mensajes.join('\n'));
    }
})
