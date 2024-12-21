<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios Combinados</title>
    <link rel="stylesheet" href="public/Css/styles3.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="box">
                <?php include 'form1.php'; ?>
            </div>
            <div class="box">
                <?php include 'form2.php'; ?>
            </div>
        </div>
        <div class="box">
            <h2>Juego de Tetris</h2>
            <button id="startButton">Jugar</button>
            <button id="restartButton" style="display: none;">Reiniciar</button>
            <div id="scoreDisplay">Puntaje: 0 | Nivel: 1</div>
            <canvas id="tetris"></canvas>
        </div>
    </div>
    <script src="public/Js/FunTetris.js"></script>
</body>
</html>