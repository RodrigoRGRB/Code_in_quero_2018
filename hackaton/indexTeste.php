<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Cadastro</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

</head>

<body>

    <header>
        <div class="container">
            <img src="img/img-02.png">
        </div>
    </header>

    <section class="container">
        <h2 id="titulo-form">Cadastrar Tarefa</h2>

        <ul id="mensagens-erro"></ul>

        <form id="form-adiciona" action="cadastro/tarefa.php" method="post">
            <!-- <div class="grupo">
                <label for="id">ID:</label>
                <input id="id" name="id" type="text" placeholder="Id da tarefa" class="campo" disabled>
            </div> -->

            <div class="grupo">
                <label for="nome">Tarefa:</label>
                <input id="nome" name="nome" type="text" placeholder="Descreva o nome da tarefa" class="campo">
            </div>

            <div class="grupo">
                <label for="descricao">Descrição:</label>
                <input id="descricao" name="descricao" type="text" placeholder="Descrição da Tabela" class="campo campo-medio">
            </div>

            <div class="grupo">
                <label for="prazo">Prazo para Entrega</label>
                <input id="prazo" name="fim" type="text" placeholder="Insira um prazo" class="campo campo-medio">
            </div>

            <div class="grupo">
                <label for="skill">Skills:</label>
                <?php 
                   include_once("config.php");
                   $result_cursos = "SELECT * FROM skill";
	                $resultado_cursos = mysqli_query($conn, $result_cursos);

                while($row = mysqli_fetch_assoc($resultado_cursos)){ ?>

                <input type="checkbox" name="<?php echo $row['nome'];?>" value="<?php echo $row['id'];?>"> <span class="check"><?php echo $row['nome'];?></span>
                <input type="number" name="<?php echo $row['id'];?>n" value="1" min="1" max="100" class="campo campo-pequeno"><br>
                            
                <?php } ?>
                

            </div>

            <div class="grupo">
                <label for="status">Status</label>
                <select id="status" name="status">
                    <option value="Disponivel">Disponível</option>
                    <option value="aguardando">Aguardando</option>
                    <option value="avaliacao">Avaliacao</option>
                </select>
            </div>


            <button id="adicionar-tarefa" class="botao bto-principal">Adicionar</button>
        </form>
    </section>

    <main>
        <section class="container">
            <h2>Tarefas</h2>
            <label for="filtrar-tabela">Filtre:</label>
            <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome da tarefa">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarefa</th>
                        <th>Descrição</th>
                        <th>Inicio</th>
                        <th>Prazo</th>
                        <th>Skills</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody id="tabela-tarefas">
                    <?php 
                    $result_cursos = "SELECT * FROM tarefas";
	                $resultado_cursos = mysqli_query($conn, $result_cursos);
                    

                while($row = mysqli_fetch_assoc($resultado_cursos)){
                    ?>
                    <tr class="tarefa" id="primeiro-tarefa">
                        <td class="info-id"><?php echo $row["id"]; ?></td>
                        <td class="info-nome"><?php echo $row["descricao"]; ?></td>
                        <td class="info-descricao"><a href="<?php echo $row["exigencia"]; ?>">Link</a></td>
                        <td class="info-lancamento"><?php echo $row["inicio"]; ?></td>
                        <td class="info-prazo"><?php echo $row["limite"]; ?></td>
                        <td class="info-skills">
                        <?php 

                        $result1 = "SELECT skill from skillxtarefa WHERE tarefa = ".$row["id"];
                        $resultado1 = mysqli_query($conn, $result1);

                        while($rows1 = mysqli_fetch_assoc($resultado1)){

                     
                            $result = "SELECT nome from skill WHERE id = ".$rows1["skill"];
	                        $resultado = mysqli_query($conn, $result);

                            while($rows = mysqli_fetch_assoc($resultado)){
                                echo $rows["nome"]." , ";
                            }

                        }
                        ?>
                        </td>
                        <td class="info-status"><?php echo $row["status"]; ?></td>
                    </tr>
                <?php } ?>
                </tbody>

            </table>

        </section>
    </main>

    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.js"></script>
    <script src="http://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
    <script src="js/form.js"></script>
    <script src="js/remover-tarefa.js"></script>
    <script src="js/filtra.js"></script>

</body>

</html>
