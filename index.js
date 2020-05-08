console.log('Hola code.js');


//Al barro

var btn1 = document.getElementById('btn1');
var milio = document.getElementById('mail');
var contra = document.getElementById('password');

function presente(){
var tablero = document.getElementById('tablero');
   tablero.innerHTML = 'Escribiste algo';
    console.log('Mira a ver');
}
btn1.addEventListener('click', presente);
