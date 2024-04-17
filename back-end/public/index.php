<?php

// Permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");

// Permite os métodos HTTP GET e POST
header("Access-Control-Allow-Methods: GET, POST");

// Permite os cabeçalhos Content-Type
header("Access-Control-Allow-Headers: Content-Type");



include '../src/Controller/ContactsController.php';

use App\Controllers\ContactController;


// // Cria uma instância do PDO para se conectar ao banco de dados
$pdo = new PDO('mysql:host=54.161.127.132;dbname=contatos_data_base', 'user_app', 'senha123');

// Inicializa o controller
$contactController = new ContactController($pdo);



// Função para manipular requisições POST para /postContatos
function handlePostContatos($contactController) {
    $data = $_POST;
    $csvFilePath = $_FILES['arquivoCsv']['tmp_name'];
    $campanha = $data['campanha'];
    
    $csvFile = new SplFileObject($csvFilePath, 'r');
    $csvFile->setFlags(SplFileObject::READ_CSV);
    
    // Ignora o cabeçalho do CSV
    $csvFile->seek(1);
    
    foreach ($csvFile as $row) {
        // Verifica se a linha possui o número esperado de elementos
        if (count($row) >= 8) {
            // Atribui os valores a variáveis individuais
            $nome = $row[0];
            $sobrenome = $row[1];
            $email = $row[2];
            $telefone = $row[3];
            $endereco = $row[4];
            $cidade = $row[5];
            $cep = $row[6];
            $dataNascimento = $row[7];
            
            // Insere esses dados no banco de dados usando o controlador
            $contactController->createContact($campanha, $nome, $sobrenome, $email, $telefone, $endereco, $cidade, $cep, $dataNascimento);
        } 
    }
    

    header('Content-Type: application/json');
    echo json_encode(['message' => 'ok']);
}



// Função para manipular requisições GET para /getContatos
function handleGetContatos($contactController, $queryParams) {

    // Chame o método no controlador para obter os contatos
    $contatos = $contactController->getContacts($queryParams);


    // Retorne uma resposta JSON
    header('Content-Type: application/json');
    echo json_encode($contatos);
}




// Roteamento manual das requisições

// Rota POST - Criação de contatos
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_SERVER['REQUEST_URI'] === '/postContatos') {

    handlePostContatos($contactController);



// Rota GET - Consulta de contatos - Verifica se '/getContatos está no inicio da requisição, se estiver, a posição é 0 e então entra na condicional
} elseif (strpos($_SERVER['REQUEST_URI'], '/getContatos') === 0) {

    
    // Extrai os parametros da URL
    $queryParams = $_GET;

    handleGetContatos($contactController, $queryParams);


    
} else {
    // Rota não encontrada
    header("HTTP/1.0 404 Not Found");
    echo "404 Not Found";
}
