"use strict";
var campo1 = document.querySelector('#campo1');
var campo2 = document.querySelector('#campo2');
var formulario = document.querySelector('form');
var mensagem = document.querySelector('#mensagem');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    var n1 = parseInt(campo1.value);
    var n2 = parseInt(campo2.value);
    if (isNaN(n1)) {
        mensagem.innerText = 'O primeiro número foi preenchido incorretamente!';
        return;
    }
    if (isNaN(n2)) {
        mensagem.innerText = 'O segundo número foi preenchido incorretamente!';
        return;
    }
    var soma = n1 + n2;
    mensagem.innerText = "A soma de " + n1 + " + " + n2 + " \u00E9 " + soma + ".";
});
