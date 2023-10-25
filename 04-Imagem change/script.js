var numberImg = 1;

function imgChangerAdd(){
    var img = document.getElementById("img");
    
    if(numberImg < 3){
        numberImg += 1;
    }else{
        numberImg = 3;
    }
    img.src = "assets/img" + numberImg + ".png"
}

function imgChangerSub(){
    var img = document.getElementById("img");
    
    if(numberImg > 1){
        numberImg -= 1;
    }else{
        numberImg = 1;
    }
    img.src = "assets/img" + numberImg + ".png"
}
