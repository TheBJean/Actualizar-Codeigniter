<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="public/Css/styles.css">
</head>

<body>
    <div class="login-container">
        <div class="login-image"></div>
        <div class="login-form">
            <h1>Proyecto<br>D. Web</h1>
            <form>
                <input id="InpUser" type="text" placeholder="Usuario" required>
                <input id="InpPassword" type="password" placeholder="Contraseña" required>
                <button onclick="LoginRedirect(event)">Login</button>
            </form>
        </div>
    </div>
</body>

<script src="public/Js/funLogin.js"></script>

</html>