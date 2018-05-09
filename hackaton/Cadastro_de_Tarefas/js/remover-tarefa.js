var tarefas = document.querySelectorAll(".tarefa");

var tabela = document.querySelector("#tabela-tarefas");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
