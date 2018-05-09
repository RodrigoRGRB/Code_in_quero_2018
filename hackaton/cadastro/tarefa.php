<?php
		include("../config.php");
    $tarefa = $_POST["nome"];
    $descricao = $_POST["descricao"];
    
    $status = $_POST["status"];
    $limite = $_POST["fim"];
   
    $inicio = date("Y-m-d");


    $limite = str_replace("/","-",$limite);

    $str = $limite;
    $arr = explode("-",$str);
    $limite = $arr[2]."-".$arr[1]."-".$arr[0];


    $resultTare = "INSERT INTO tarefas VALUES ('null','$tarefa','$inicio','$limite','null','$descricao','$status','0')";	
    $resultadoTare = mysqli_query($conn, $resultTare);
    $ultimo = mysqli_insert_id($conn);
    echo $ultimo;
		
	$result_cursos = "SELECT * FROM skill";
	$resultado_cursos = mysqli_query($conn, $result_cursos);
    $i = 0;

    $skills = [];
    while($row = mysqli_fetch_assoc($resultado_cursos)){ 
    $skills[$i] = $_POST[$row["id"]."n"];
    echo $skills[$i];
    if(isset($_POST[$row['nome']])){
        $id = $row['id'];
        $resultSTare = "INSERT INTO skillxtarefa VALUES ('null','$ultimo','$id','$skills[$i]')";	
    $resultadoSTare = mysqli_query($conn, $resultSTare);
    }
    

        $i++;
        
    }
    /*
    echo $tarefa;
    echo "<br>";
    echo $descricao;echo "<br>";
    echo $fim;echo "<br>";
    echo $status;echo "<br>";
    */
    header('Location:../teste.php');
	
?>