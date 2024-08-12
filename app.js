//-------------Manejo del DOM--------------------//
const textAreaEntrada = document.getElementById('textarea__Entrada');
const botonEncriptar = document.getElementsByClassName('boton__Encriptar')[0];
const botonDesencriptar = document.getElementsByClassName('boton__Desencriptar')[0];
const imagenDesencriptar = document.querySelector('.imagen__Desencriptar');
const textAreaSalida =document.getElementById('textarea__Salida');
const botonCopiar = document.getElementsByClassName('boton__Copiar')[0];
const imagenesFooter = document.getElementsByClassName('imagenesFooter');

//------------------------Funciones para Encriptar y desencriptar---------------------------//

botonEncriptar.onclick = function(){
    let textoEncriptado = encriptar(textAreaEntrada.value);
    console.log(textoEncriptado);
    textAreaSalida.value = textoEncriptado;
    ocultarBotonCopiar();
    ocultarImagen();
};

botonDesencriptar.onclick = function(){
    let textoDesencriptado = desencriptar(textAreaEntrada.value);
    textAreaSalida.value = textoDesencriptado;
    ocultarBotonCopiar();
    ocultarImagen();
};

//------------------Funciones para borrar texto cuando una de las dos cajas de texto esta vacia--------//

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

//---------------------funciones para eliminar imagen y boton de copiar--------------------------------//

function ocultarBotonCopiar(){
    if (textAreaSalida.value === ''){
        botonCopiar.style.display = 'none';
    } else {
        botonCopiar.style.display = 'block';
    }
};

function ocultarImagen(){
    if (window.innerWidth >= 900){
        textAreaSalida.value === '' ? imagenDesencriptar.style.display = 'block' : imagenDesencriptar.style.display = 'none';
    } else {
        imagenDesencriptar.style.display = 'none';
    }
};

// FUNCIONES PARA ENCRIPTAR Y DESENCRIPTAR EL CODIGO //

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