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
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    novaTarefa.appendChild(botaoExcluir);
    campoTarefa.value = "";
    
    botaoExcluir.addEventListener("click", function (eventoClique) {
        eventoClique.stopPropagation();
        novaTarefa.remove();
        
    });
    novaTarefa.addEventListener("click", function () {
        novaTarefa.classList.toggle("concluida");
    });
    
    
});