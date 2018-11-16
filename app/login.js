$(document).ready(function(){
           
    $("#login").click(function(){
       login();

    });
});

function login(){
    var username = $("#email").val();
    var password = $("#password").val();

    if (username == "cv5@gmail.com" && password == "samuel5"){

        alert("Bienvenido Cristian")
    }else{

        alert("Error al ingresar los datos del login.")
    }

}