<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider con Comprobación</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            text-align: center;
            background-color: #f5f5f5;
            color: #333;
        }

        h3 {
            color: #4CAF50;
        }

        #InpSlider {
        -webkit-appearance: none;
            width: 300px;
            height: 10px;
            background: #ddd;
            outline: none;
            border-radius: 5px;
            transition: background 0.3s ease-in-out;
        }

        #InpSlider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #4CAF50;
            cursor: pointer;
            border-radius: 50%;
        }

        #InpSlider:focus {
            background: #bbb;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease-in-out;
        }

        button:hover {
            background-color: #45a049;
        }

        #ResulInp {
            font-weight: bold;
            color: #4CAF50;
            margin-left: 10px 0;
        }

        #PResultado {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            padding: 10px;
            border-radius: 5px;
            display: flex inline-block;
            width: auto;
            flex-direction: column;


        }
    </style>
</head>

<body>
    <h3>Slider con Comprobación</h3>
    <!-- Slider -->
    <input id="InpSlider" type="range" min="0" max="100" value="50">
    <!-- Muestra el valor del slider -->
    <span id="ResulInp">50</span>
    <!-- Botón para comprobar -->
    <button onclick="MostrarDatos()">Comprobar</button>
    <!-- Resultado -->
    <p id="PResultado"></p>

    <script>
        // Referencias al slider y el span
        var ObjSlider = document.getElementById("InpSlider");
        var ObjResultadoSlider = document.getElementById("ResulInp");

        // Función para actualizar el valor en el span dinámicamente
        ObjSlider.oninput = function () {
            ObjResultadoSlider.innerHTML = this.value;
        };

        // Función para comprobar el valor y mostrar el resultado
        function MostrarDatos() {
            var valorSlider = parseInt(ObjSlider.value);
            var ObjParrafo = document.getElementById("PResultado");

            if (valorSlider < 50) {
                ObjParrafo.innerHTML = `El valor (${valorSlider}) está debajo de 50.`;
                ObjParrafo.style.color = "red";
                ObjParrafo.style.backgroundColor = "#ffe6e6";
            } else if (valorSlider > 50) {
                ObjParrafo.innerHTML = `El valor (${valorSlider}) está por encima de 50.`;
                ObjParrafo.style.color = "green";
                ObjParrafo.style.backgroundColor = "#e6ffe6";
            } else {
                ObjParrafo.innerHTML = `El valor es exactamente 50. 🎯`;
                ObjParrafo.style.color = "blue";
                ObjParrafo.style.backgroundColor = "#e6f0ff";
            }
        }
    </script>
</body>

</html>