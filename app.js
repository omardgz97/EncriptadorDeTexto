//-------------Manejo del DOM--------------------//
const textAreaEntrada = document.getElementById('textarea__Entrada');
const botonEncriptar = document.getElementsByClassName('boton__Encriptar')[0];
const botonDesencriptar = document.getElementsByClassName('boton__Desencriptar')[0];
const imagenDesencriptar = document.querySelector('.imagen__Desencriptar');
const textAreaSalida =document.getElementById('textarea__Salida');
const botonCopiar = document.getElementsByClassName('boton__Copiar')[0];
const imagenesFooter = document.getElementsByClassName('imagenesFooter');
const todosLosBotones = document.getElementsByTagName('button');

//----------------------Funciones para botones Encriptar, Desencriptar y Copiar--------------------------//

botonEncriptar.addEventListener('click', function(){
    verificacionDeTextoValido()
    let textoEncriptado = encriptar(textAreaEntrada.value);
    textAreaSalida.value = textoEncriptado;
    ocultarBotonCopiar();
    ocultarImagen();
});

botonDesencriptar.addEventListener('click', function(){
    verificacionDeTextoValido()
    let textoDesencriptado = desencriptar(textAreaEntrada.value);
    textAreaSalida.value = textoDesencriptado;
    ocultarBotonCopiar();
    ocultarImagen();
});

botonCopiar.addEventListener('click', function(){
    navigator.clipboard.writeText(textAreaSalida.value);
});

Array.from(todosLosBotones).forEach(boton => {
    const colorOriginal = boton.style.backgroundColor;
    boton.addEventListener('mousedown', function() {
        boton.style.backgroundColor = '#021526';
    });
    boton.addEventListener('mouseup', function(){
        boton.style.backgroundColor = colorOriginal;
    });
});

function verificacionDeTextoValido(){
    let expresionRegular = /[A-ZáéíóúÁÉÍÓÚ]/;
    if (expresionRegular.test(textAreaEntrada.value)){
        alert('Tu texto contiene mayúsculas o acentos.');
        throw new Error;
    } else {
        return;
    };
};

//------------------Funciones para borrar texto cuando una de las dos cajas de texto esta vacia----------//

textAreaEntrada.addEventListener('input', function(){
    if (textAreaEntrada.value === ""){
        textAreaSalida.value = "";
    }
    ocultarBotonCopiar();
    ocultarImagen();
});

textAreaSalida.addEventListener('input', function(){
    if (textAreaSalida.value === ""){
        textAreaEntrada.value = "";
    }
    ocultarBotonCopiar();
    ocultarImagen();
});

//------------------------funciones para eliminar imagen y boton de copiar-------------------------------//

function ocultarBotonCopiar(){
    if (textAreaSalida.value === ''){
        botonCopiar.style.display = 'none';
        textAreaSalida.style.height = '100%';
    } else {
        botonCopiar.style.display = 'block';
        textAreaSalida.style.height = '90%';
    }
};

function ocultarImagen(){
    if (window.innerWidth >= 900){
        textAreaSalida.value === '' ? imagenDesencriptar.style.display = 'block' : imagenDesencriptar.style.display = 'none';
    } else {
        imagenDesencriptar.style.display = 'none';
    }
};

//------------------------FUNCIONES PARA ENCRIPTAR Y DESENCRIPTAR EL CODIGO-------------------------------//

function encriptar(texto){
    let array = Array.from(texto);
    let arrayEncriptado = array.map(function(vocal){
        if (vocal === 'a'){
            return 'ai';
        }
        else if (vocal === 'e'){
            return 'enter';
        }
        else if (vocal === 'i'){
            return 'imes';
        }
        else if (vocal === 'o'){
            return 'ober';
        }
        else if (vocal === 'u'){
            return 'ufat';
        }
        else{
            return vocal;
        }
    });
    return arrayEncriptado.join('');
}

function desencriptar(texto){
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    return texto;
}