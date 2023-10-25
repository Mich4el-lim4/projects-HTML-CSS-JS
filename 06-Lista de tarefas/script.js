document.getElementById("buttonAdd").onclick = function(){
    var inputTarefa = document.getElementById("inputTarefa").value;
    var newTask = '<div id="novasTarefas"><div id="tarefas"><span>'+ inputTarefa +'</span><button id="deletar">Del</button></div></div>';

    if(inputTarefa.length == 0){
        alert("Digite alguma tarefa");
    }else{
        document.getElementById("novasTarefas").innerHTML += newTask;
    }

    var numeroDeTarefas = document.querySelectorAll("#deletar");

    for (let index = 0; index < numeroDeTarefas.length; index++) {
        numeroDeTarefas[index].onclick = function(){
            this.parentNode.remove();
        };
        
    }
}

