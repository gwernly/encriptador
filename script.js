var texto = document.querySelector("input");
function encriptar() {
    let arr = texto.value.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "e") {
            arr[i] = "enter";
        }
        if (arr[i] == "i") {
            arr[i] = "imes";
        }
        if (arr[i] == "a") {
            arr[i] = "ai";
        }
        if (arr[i] == "o") {
            arr[i] = "ober";
        }
        if (arr[i] == "u") {
            arr[i] = "ufat";
        }
    }
    let textoEnc = arr.join("");
    document.querySelector("input").value = "";
    //console.log(textoEnc);
    const p = document.getElementById('contenedor');
    p.textContent = textoEnc;
    //return textoEnc;
} 

function desencriptar() {
    let arr = texto.value.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "e" && arr[i+1] == "n" && arr[i+2] == "t" && arr[i+3] == "e" && arr[i+4] == "r") {
            arr[i] = "e";
            arr[i+1] = "";
            arr[i+2] = "";
            arr[i+3] = "";
            arr[i+4] = "";
        }

        if (arr[i] == "i" && arr[i+1] == "m" && arr[i+2] == "e" && arr[i+3] == "s") {
            arr[i] = "i";
            arr[i+1] = "";
            arr[i+2] = "";
            arr[i+3] = "";
        }

        if (arr[i] == "a" && arr[i+1] == "i") {
            arr[i] = "a";
            arr[i+1] = "";
        }

        if (arr[i] == "o" && arr[i+1] == "b" && arr[i+2] == "e" && arr[i+3] == "r") {
            arr[i] = "o";
            arr[i+1] = "";
            arr[i+2] = "";
            arr[i+3] = "";
        }
        if (arr[i] == "u" && arr[i+1] == "f" && arr[i+2] == "a" && arr[i+3] == "t") {
            arr[i] = "u";
            arr[i+1] = "";
            arr[i+2] = "";
            arr[i+3] = "";
        }
    
    }
    let textoDesenc = arr.join("");
    document.querySelector("input").value = "";
    //console.log(textoDesenc);
    const p = document.getElementById('contenedor');
    p.textContent = textoDesenc;
    //return textoDesenc;
}

function textCheck(string){
    var letradev = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyz '; //letras permitidas
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
       letradev += string.charAt(i);
    return letradev;
}

var buttonEnc = document.querySelector(".btnencriptar");
buttonEnc.onclick = encriptar;

var buttonDesenc = document.querySelector(".btndesencriptar");
buttonDesenc.onclick = desencriptar;