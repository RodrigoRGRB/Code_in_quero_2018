//var botaoAdicionar = document.querySelector("#adicionar-tarefa");
/*botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var tarefa = obtemtarefaDoFormulario(form);

    var tarefaTr = montaTr(tarefa);


    var tabela = document.querySelector("#tabela-tarefas");

    tabela.appendChild(tarefaTr);

    form.reset();

});*/

function obtemtarefaDoFormulario(form) {

    var tarefa = {
        id: form.id.value,
        nome: form.nome.value,
        descricao: form.descricao.value,
        lancado: dataatual(),
        prazo: form.prazo.value,
        skill: obterskill(),
        status: form.status.value,
    }

    return tarefa;
}

function montaTr(tarefa) {
    var tarefaTr = document.createElement("tr");
    tarefaTr.classList.add("tarefa");

    tarefaTr.appendChild(montaTd(tarefa.id, "info-id"));
    tarefaTr.appendChild(montaTd(tarefa.nome, "info-nome"));
    tarefaTr.appendChild(montaTd(tarefa.descricao, "info-descricao"));
    tarefaTr.appendChild(montaTd(tarefa.lancado, "info-lancamento"));
    tarefaTr.appendChild(montaTd(tarefa.prazo, "info-prazo")); tarefaTr.appendChild(montaTd(tarefa.skill, "info-skills"));
    tarefaTr.appendChild(montaTd(tarefa.status, "info-status"));

    return tarefaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

//function validatarefa(tarefa) {
//
//    var erros = [];
//
//    if (tarefa.nome.length == 0) {
//        erros.push("A tarefa não pode ser em branco");
//    }
//
//    if (tarefa.lancado.length == 0) {
//        erros.push("A data de lancamento não pode ser em branco");
//    }
//
//    if (tarefa.pontos.length == 0) {
//        erros.push("O pontos não pode ser em branco");
//    }
//
//    if (tarefa.skill.length == 0) {
//        erros.push("A skill não pode ser em branco");
//    }
//
//    return erros;
//}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function obterskill(){
    var skill = document.getElementsByName('skill');
    var level = document.getElementsByName('level');
    var txt = "";
    var i;
    for (i = 0; i < skill.length; i++) {
        if (skill[i].checked) {
            txt = txt + skill[i].value + " - " + level[i].value + ", ";
        }
    }
    return txt;
}


function dataatual(){
    var now = new Date;
    var data = now.getDate() + "/" + (parseInt(now.getMonth()) +1) + "/" + now.getFullYear() ;
    
    return data;
}


$(function() {
    $("#prazo").datepicker({dateFormat: 'dd/mm/yy'});
});
