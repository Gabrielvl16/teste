<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript - Somar Números</title>
</head>
<body>
    <h2>Calculadora</h2>
    <p>Digite dois números para somar:</p>
    <input type="number" id="numero1">
    <input type="number" id="numero2">
    <button onclick="somar()">Somar</button>
    <p id="resultado"></p>

    <script>
        function somar() {
            let num1 = parseFloat(document.getElementById("numero1").value);
            let num2 = parseFloat(document.getElementById("numero2").value);
            let resultado = num1 + num2;
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        }
    </script>
</body>
</html>
