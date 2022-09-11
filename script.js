const inputTexto = document.querySelector(".input-texto");//toma el texto del text area que tiene la clase input-textp
const mensaje = document.querySelector(".mensaje");//toma el texto del text area que tiene la clase input-texto


//const inputTexto = document.querySelector(".input-Simbolos");//toma el texto del text area que tiene la clase input-textp
//const mensaje = document.querySelector(".mensaje");//toma el texto del text area que tiene la clase input-texto


//Boton para encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

//Boton para desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

//Boton para convertir en simbolos
function btnSimbolos(){
    const textoSimbolos = simbolos(inputTexto.value)
    mensaje.value = textoSimbolos;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

//Boton para convertir binario en texto
function btnTexto(){
    const textoSimbolos = simbolosTexto(inputTexto.value)
    mensaje.value = textoSimbolos;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

// Funcion para encriptar
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ia"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

//Funcion de desencriptar 

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ia"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

// Funcion texto a simbolos
function simbolos(stringSimbolos){
    let matrizSimbolos = [["a","/"],["b","-"],["c","+"],["d","*"],["e","<"],["f",">"],["g","!"],["h","%"],["i","&"],["j","="],
    ["k","@"],["l","#"],["m","$"],["n","("],["ñ",")"],["o","{"],["p","["],["q","´´"],["r","}"],["s",":"],["t",";"],["u","_"],["v","-"],
    ["w","?"],["x","°"],["y","|"],["z","Ø"],];
    stringSimbolos = stringSimbolos.toLowerCase();

    for (let i = 0; i < matrizSimbolos.length; i++){
        if(stringSimbolos.includes(matrizSimbolos[i][0])){
            stringSimbolos = stringSimbolos.replaceAll(matrizSimbolos[i][0],matrizSimbolos[i][1]);
        }
    }

    return stringSimbolos;
}

//Funcion de binario a texto 

function simbolosTexto(stringTexto){
    let matrizSimbolos = [["a","/"],["b","-"],["c","+"],["d","*"],["e","<"],["f",">"],["g","!"],["h","%"],["i","&"],["j","="],
    ["k","@"],["l","#"],["m","$"],["n","("],["ñ",")"],["o","{"],["p","["],["q","´´"],["r","}"],["s",":"],["t",";"],["u","_"],["v","-"],
    ["w","?"],["x","°"],["y","|"],["z","Ø"],];
    stringTexto = stringTexto.toLowerCase();

    stringTexto = stringTexto.toLowerCase();

    for (let i = 0; i < matrizSimbolos.length; i++){
        if(stringTexto.includes(matrizSimbolos[i][1])){
            stringTexto = stringTexto.replaceAll(matrizSimbolos[i][1],matrizSimbolos[i][0]);
        }
    }

    return stringTexto;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    
}

/*function copiarSimbolos(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    mensaje.style.backgroundImage = "hidden"
}*/
