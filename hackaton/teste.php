<?php

// Conecta com o banco de dados:
include("config.php");


//Lista tarefa

// Seleciona todos os registros da tabela:
$result = mysqli_query($conn, "SELECT * FROM skill");

// Retorna todos os registros:
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Escreve o resultado JSON em arquivo:
file_put_contents("skill.json", json_encode($data));

// Lista que armazenará todos os registros:
$rows = [];

// Percorre todos os registros:
while ($row = mysqli_fetch_assoc($result)) {

    // Adiciona o registro na lista:
    array_push($rows, $row);

}

$json = json_encode($rows);

//skillxtarefa

// Seleciona todos os registros da tabela:
$result = mysqli_query($conn, "SELECT * FROM skillxtarefa");

// Retorna todos os registros:
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Escreve o resultado JSON em arquivo:
file_put_contents("skillxtarefa.json", json_encode($data));

// Lista que armazenará todos os registros:
$rows = [];

// Percorre todos os registros:
while ($row = mysqli_fetch_assoc($result)) {

    // Adiciona o registro na lista:
    array_push($rows, $row);

}

$json = json_encode($rows);


//Usuario Skill

// Seleciona todos os registros da tabela:
$result = mysqli_query($conn, "SELECT * FROM usuarioxskill");

// Retorna todos os registros:
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Escreve o resultado JSON em arquivo:
file_put_contents("usuarioxskill.json", json_encode($data));

// Lista que armazenará todos os registros:
$rows = [];

// Percorre todos os registros:
while ($row = mysqli_fetch_assoc($result)) {

    // Adiciona o registro na lista:
    array_push($rows, $row);

}

$json = json_encode($rows);


//Usuario Skill

// Seleciona todos os registros da tabela:
$result = mysqli_query($conn, "SELECT * FROM usuario");

// Retorna todos os registros:
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Escreve o resultado JSON em arquivo:
file_put_contents("usuario.json", json_encode($data));

// Lista que armazenará todos os registros:
$rows = [];

// Percorre todos os registros:
while ($row = mysqli_fetch_assoc($result)) {

    // Adiciona o registro na lista:
    array_push($rows, $row);
    echo $rows;
    echo $row;

}

$json = json_encode($rows);

$result = mysqli_query($conn, "SELECT * FROM tarefas");

// Retorna todos os registros:
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Escreve o resultado JSON em arquivo:
file_put_contents("tarefas.json", json_encode($data));

// Lista que armazenará todos os registros:
$rows = [];

// Percorre todos os registros:
while ($row = mysqli_fetch_assoc($result)) {

    // Adiciona o registro na lista:
    array_push($rows, $row);

}

$json = json_encode($rows);

header('Location:indexTeste.php');
