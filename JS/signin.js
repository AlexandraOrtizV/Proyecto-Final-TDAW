//alert("hola mundo"); /* forma facil de corroborar que el archivo este vinculado correctamente*/

document.getElementById("btn-registro").addEventListener("click", register);
document.getElementById("btn-inises").addEventListener("click", IniciarSesion);

//Declarar variables
var forms = document.querySelector(".contenedor-formularios");
var form_login = document.querySelector(".form-login");
var form_reg = document.querySelector(".form-registro");
var caja_fondo_li = document.querySelector(".caja-f-li");
var caja_fondo_reg = document.querySelector(".caja-f-reg");

function register(){
    form_reg.style.display = "block";
    forms.style.left = "410px";
    form_login.style.display = "none";
    caja_fondo_reg.style.opacity = "0";
    caja_fondo_li.style.opacity = "1";
}

function IniciarSesion(){
    form_reg.style.display = "none";
    forms.style.left = "10px";
    form_login.style.display = "block";
    caja_fondo_reg.style.opacity = "1";
    caja_fondo_li.style.opacity = "0";
}