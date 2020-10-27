"use strict";
var campo = document.querySelector('.custom-input');
var formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    var p = document.querySelector('#mensagem');
    if (!p) {
        p = document.createElement('p');
        p.id = 'mensagem';
        formulario.append(p);
    }
    if (campo.value) {
        p.innerText = "Ol\u00E1, " + campo.value + "!";
    }
    else {
        p.innerText = 'Olá mundo!';
    }
});
