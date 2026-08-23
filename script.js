const formulario = document.querySelector("#task-form");
const campoTarefa = document.querySelector("#task-input");
const listaTarefas = document.querySelector("#task-list");
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function criarTarefaNaTela(dadosDaTarefa) {
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = dadosDaTarefa.texto;
    novaTarefa.classList.toggle("concluida", dadosDaTarefa.concluida);

    listaTarefas.appendChild(novaTarefa);
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    novaTarefa.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", function (eventoClique) {
        eventoClique.stopPropagation();
        novaTarefa.remove();
        const indice = tarefas.indexOf(dadosDaTarefa);
        if (indice !== -1) {
            tarefas.splice(indice, 1);
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }
    });

    novaTarefa.addEventListener("click", function () {
        dadosDaTarefa.concluida = !dadosDaTarefa.concluida;
        novaTarefa.classList.toggle("concluida", dadosDaTarefa.concluida);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    });
}

    tarefas.forEach(function (dadosDaTarefa) {
        criarTarefaNaTela(dadosDaTarefa);
    });

formulario.addEventListener("submit", function(evento){
    
    
    evento.preventDefault();

    

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === ""){
        return;
        
    }
    const dadosDaTarefa = {
    texto: textoTarefa,
    concluida: false
};   
    tarefas.push(dadosDaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    criarTarefaNaTela(dadosDaTarefa);
    campoTarefa.value = "";

    console.log(tarefas);
});
