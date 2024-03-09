// VARIABLES GLOBALES
var BtnEncriptar=document.querySelector(".BotonE");
var BtnDesencriptar= document.querySelector(".BotonD");
var BtnLimpiar= document.querySelector(".BotonL");
var BtnCopiar = document.querySelector(".BotonC");

//COMPORTAMIENTO DE BOTONES Y TEXTAREA
BtnCopiar.disabled=true;
BtnLimpiar.disabled=true;
BtnDesencriptar.disabled=true;
document.getElementById("textoIngresado").value= "Ingrese el texto que desea encriptar: ";

// FUNCIONES
function fnencriptar(){
    
    quitar=document.getElementById("textoIngresado");
    quitar.onfocus=false;
    var textoIngresado= document.getElementById("textoIngresado").value;
    var textoEncriptado= textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
      if(document.getElementById("textoIngresado").value !=""){
         BtnDesencriptar.disabled=false;
         BtnLimpiar.disabled=false;
         BtnCopiar.disabled=false;
         textoIngresado=textoEncriptado;
         document.getElementById("textoIngresado").value=textoEncriptado.toLowerCase(); }
         else{ alert("Ingresa Texto por favor!") } }

function fndesencriptar()
{
    BtnCopiar.disabled=true;
    BtnEncriptar.disabled=false;
    BtnDesencriptar.disabled=true;
    let textoDesencriptado= document.getElementById("textoIngresado").value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    document.getElementById("textoIngresado").value= textoDesencriptado;}

function Limpiar() {
   document.getElementById("textoIngresado").value = "";
   BtnDesencriptar.disabled=true;
   BtnLimpiar.disabled=true;
   BtnEncriptar.disabled=false
   BtnCopiar.disabled=true;
}
function Validar(event){
    var letra = event.keyCode;
    if (letra >64 && letra <91 || letra == 32 || letra== 8){ 
        return true
    } else{
        alert("No se admiten caracteres especiales ni números.")
        return false;
    }
}
function Copiar() {
    var contentenido = document.getElementById('textoIngresado');
    contentenido.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
  }
  
  
 
