<?php 
	include("config.php");
?>
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rank</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>

    <header>
        <div class="container">
            <img src="images/img-02.png">
        </div>
    </header>
    <div class="content">
        <div class="search-bar flex grow">
            <input class="search flex grow" placeholder="Procurar" />
        </div>

        <div class="leaderboard flex column wrap">
            <div class="leaderboard-table flex column">
                <div class="leaderboard-header flex column grow">

                    <div class="filter-by flex grow wrap">
                        <div class="time-filter flex grow">
                            <div class="row-button pointer row-button--active align-center">Hoje</div>
                            <div class="row-button pointer align-center">Essa Semana</div>
                            <div class="row-button pointer align-center">Este Mês</div>
                        </div>
                        <div class="subject-filter flex grow">
                        </div>
                    </div>









                    <div class="leaderboard-row flex align-center row--header" style="border-radius: 0 !important;">
                        <div class="row-posicao">Posição</div>
                        <div class="row-collapse flex align-center">
                            <div class="row-usuario--header">Funcionário</div>
                            <div class="row-rank--header">Rank</div>
                        </div>
                        <div class="row-pontos">Pontos</div>
                    </div>
                </div>
                
                
                

                <div class="leaderboard-body flex column grow">


                <?php 
                    $result_cursos = "SELECT * FROM usuario ORDER BY pontos DESC";
	                $resultado_cursos = mysqli_query($conn, $result_cursos);
                    
                    
                while($row = mysqli_fetch_assoc($resultado_cursos)){
                    ?>
                    <div class="leaderboard-row flex align-center">
                        <div class="row-posicao"><?php echo $row["id"];?></div>
                        <div class="row-collapse flex align-center">
                            <div class="row-caller flex">
                                <img class="avatar" src="<?php echo $row["avatar"];?>" />
                                <div class="row-usuario"><?php echo $row["nome"];?></div>
                            </div>
                            <div class="row-rank">
                            <?php 
                                if($row["pontos"] > 210){
                                    echo "Ouro";
                                }else if($row["pontos"] > 150) {
                                    echo "Prata";
                                }else if($row["pontos"] > 90){
                                    echo "Bronze";
                                }else{
                                    echo "iniciante";
                                }
                            ?>
                            </div>
                        </div>
                        <div class="row-pontos"><?php echo $row["pontos"];?></div>
                    </div>

                    <?php } ?>

                    <div class="leaderboard-footer flex align-center">
                        Pagina 1 de 2 <a class="footer-btn pointer">Próxima</a> 5 of 10 items
                    </div>

                </div>
            </div>

        </div>

    </div>

    <footer class="flex column align-center justify-center">
        Jumento Jenial - 2018
    </footer>
</body>

</html>
