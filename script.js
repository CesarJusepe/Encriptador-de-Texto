var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var imagen = document.querySelector(".contenedorImagen");
var contenido = document.querySelector(".contenedorParrafo");
var resultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajaTexto")
    return cajatexto.value
}

function ocultarAdelante(){
    imagen.classList.add("ocultar");
    contenido.classList.add("ocultar");
}
const botonCopiar = document.querySelector(".botonCopiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);}
);

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoEncriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncriptado = textoEncriptado + "ai"
        }
        else if(texto[i] == "e"){
            textoEncriptado = textoEncriptado + "enter"
        }
        else if(texto[i] == "i"){
            textoEncriptado = textoEncriptado + "imes"
        }
        else if(texto[i] == "o"){
            textoEncriptado = textoEncriptado + "ober"
        }
        else if(texto[i] == "u"){
            textoEncriptado = textoEncriptado + "ufat"
        }
        else{
            textoEncriptado = textoEncriptado + texto[i]
        }
    }
    return textoEncriptado;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoDesencriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDesencriptado = textoDesencriptado + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoDesencriptado = textoDesencriptado + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoDesencriptado = textoDesencriptado + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoDesencriptado = textoDesencriptado + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoDesencriptado = textoDesencriptado + "u"
            i = i+3;
        }
        else{
            textoDesencriptado = textoDesencriptado + texto[i];
        }
        
    }

    return textoDesencriptado;

}
