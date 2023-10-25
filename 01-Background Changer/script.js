var button = document.getElementById("button");
var darkTheme = false;

function changBackGround(){
    if(darkTheme == false){
        darkTheme = true;
        document.body.style.background ="white";
        button.style.background = "#8d3cd8";
        button.style.color = "white";
    }else{
        darkTheme = false;
        document.body.style.background ="#8d3cd8";
        button.style.background = "black";
        button.style.color = "white";
    }
}
