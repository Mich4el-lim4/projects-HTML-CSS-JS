function calcular(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var texto = document.getElementById("resultado");
    var resultado = peso / (altura * altura);
    var resultadoFinal = resultado.toFixed(2);
    if(resultadoFinal <= 18.5){
        texto.innerHTML = "Abaixo do peso normal: " + resultadoFinal;
    }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9){
        texto.innerHTML = "Peso ideal: " + resultadoFinal;
    }else if(resultadoFinal >= 25 && resultadoFinal <= 29.9){
        texto.innerHTML = "Excesso de peso: " + resultadoFinal;
    }else{
        texto.innerHTML = "Obesidade: Procure um médico " + resultadoFinal;
    }
}