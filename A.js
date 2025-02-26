<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript - Alterar conteúdo</title>
</head>
<body>
    <p id="meuParagrafo">Texto original do parágrafo.</p>
    <button onclick="alterarTexto()">Alterar texto</button>

    <script>
        function alterarTexto() {
            document.getElementById("meuParagrafo").innerHTML = "Texto alterado pelo JavaScript!";
        }
    </script>
</body>
</html>
