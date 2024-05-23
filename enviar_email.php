<?php
// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados do formulário
    $nome = $_POST['field_name'];
    $telefone = $_POST['field_phone'];
    $placa = $_POST['field_plate'];
    $email = $_POST['field_email'];
    
    // Configurações do e-mail
    $to = 'cleitoncesar.bp@gmail.com'; // Substitua pelo seu endereço de e-mail
    $subject = 'Cotação de Veículo';
    $message = "
        Olá, quero fazer uma cotação
        Nome: $nome
        Telefone: $telefone
        Placa do veículo: $placa
        E-mail: $email
        </html>
    ";

    // Envia o e-mail
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";                                                                                                
    $headers .= "From: $nome <$email>";
    if (mail($to, $subject, $message, $headers)) {
        echo "<meta http-equiv='refresh' content='0;URL=email_enviado.php'>";
    } else {
        echo 'Ocorreu um erro ao enviar o e-mail.';
        echo "<meta http-equiv='refresh' content='5;URL=index.php'>";
    }
}