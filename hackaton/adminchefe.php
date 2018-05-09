<?php
    include("config.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Consulta</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/index2.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">

</head>

<body class="fadeIn">

    <header>
        <div class="container">
            <img src="img/img-02.png">
        </div>
    </header>

    <section class="container">
        <h2 id="titulo-form">Tarefas Concluídas</h2>
        <section class="container">
            <table>
                <thead>
                    <tr>
                        <th>Funcionário</th>
                        <th>ID - Tarefa</th>
                        <th>Tarefa</th>
                        <th>Pontos Fornecidos</th>
                        <th>Observação</th>
                        <th>Concluir</th>

                    </tr>
                </thead>
                <form action="cadastrarPontos.php" method="get">
                <tbody id="tabela-tarefas">
                    <?php
                        $result_cursos = "SELECT * FROM tarefas WHERE status = 'analisando'";
                        $resultado_cursos = mysqli_query($conn, $result_cursos);

                         while($row = mysqli_fetch_assoc($resultado_cursos)){
                    ?>
                    <tr class="tarefa" id="primeiro-tarefa">
                        <input type="hidden" name="pessoa" value="<?php echo $row["pessoa"];?>">
                        <td class="info-funcionario"><?php echo $row["pessoa"]; ?></td>
                        <td class="info-id"><?php echo $row["id"]; ?></td>
                        <td class="info-tarefa"><?php echo '<a href="'.$row["exigencia"].'">'.$row["descricao"].'</a>'; ?></td>
                        <td class="info-pontosfornecidos"><input type="number" value="1" class="campo campo-pequeno" min="1" max="100"></td>
                        <td class="info-obs"><input type="text" class="campo"></td>
                        <td class="info-concluido"><button type="submit"><i class="fas fa-check"></i></button></td>

                    </tr>
                    <?php 
                        }
                    ?>
                </tbody>

            </table>
                    </form>

        </section>
    </section>

    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.js"></script>
    <script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
    <script src="js/form.js"></script>
    <script src="js/filtra.js"></script>

</body>

</html>
