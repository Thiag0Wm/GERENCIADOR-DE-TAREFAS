const formulario = document.querySelector("#task-form");
const campoTarefa = document.querySelector("#task-input");
const listaTarefas = document.querySelector("#task-list");


formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === ""){
        return;
    }
    
   
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    listaTarefas.appendChild(novaTarefa);
    campoTarefa.value = "";

    novaTarefa.textContent = textoTarefa;
    listaTarefas.appendChild(novaTarefa);
   
    
});