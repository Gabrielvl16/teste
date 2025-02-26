<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript - Validação de Formulário</title>
</head>
<body>
    <h2>Formulário de Contato</h2>
    <form id="formContato" onsubmit="return validarFormulario()">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email">
        <br><br>
        <input type="submit" value="Enviar">
    </form>
    <p id="erro"></p>

    <script>
        function validarFormulario() {
            let email = document.getElementById("email").value;
            let erro = document.getElementById("erro");

            // Validação simples para verificar se o campo de email está vazio ou não
            if (email == "") {
                erro.innerHTML = "Por favor, insira um e-mail!";
                return false; // Impede o envio do formulário
            }

            // Se estiver preenchido corretamente, o formulário pode ser enviado
            erro.innerHTML = "";
            return true;
        }
    </script>
</body>
</html>
