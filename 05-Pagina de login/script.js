var usuario = "michael";
var password = "1234"

function checkLogin(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(usuario == email && password == senha){
        document.location.href = "login.html";
    }else{
        alert("Usuario ou senha invalido");
        document.getElementById("forget").style.display = "flex";
    }
}