<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario 1</title>
    <link rel="stylesheet" href="public/Css/styles2.css">


</head>

<body>
    <h1>Juego de Adivinanza</h1>
    <div class="adivinanza-container">
        <form id="adivinanzaForm">
            <input type="number" id="numInput" placeholder="Introduce un número" required>
            <button type="button" onclick="adivinar()">Adivinar</button>
            <button type="button" onclick="reiniciar()">Reiniciar</button>
        </form>
        <div id="result"></div>
    </div>

    
</body>
<script src="public/Js/FunAdivinanza.js"></script>
</html>
