<?php

namespace App\Controllers;

include __DIR__ . '/../Models/ContactsModel.php';

use App\Models\Contacts;
use PDO;

class ContactController {

    private $contactModel;

    public function __construct(PDO $pdo) {
        $this->contactModel = new Contacts($pdo);
    }

    public function createContact($campanha, $nome, $sobrenome, $email, $telefone, $endereco, $cidade, $cep, $dataNascimento) {
        return $this->contactModel->insert($campanha, $nome, $sobrenome, $email, $telefone, $endereco, $cidade, $cep, $dataNascimento);
    }
    
    public function getContacts($queryParams) {

        // Verifica se o parâmetro campanha foi passado
        if (isset($queryParams['campanha'])) {

            $campanha = $queryParams['campanha'];
            return $this->contactModel->getContactsByCampanha($campanha);

        } 
        // Verifica se o parâmetro telefone foi passado
        elseif (isset($queryParams['telefone'])) {

            $telefone = $queryParams['telefone'];
            return $this->contactModel->getContactsByTelefone($telefone);

        } 
        // Verifica se o parâmetro email foi passado
        elseif (isset($queryParams['email'])) {

            $email = $queryParams['email'];
            return $this->contactModel->getContactsByEmail($email);

        } 
        // Verifica se o parâmetro nome foi passado
        elseif (isset($queryParams['nome'])) {

            $nome = $queryParams['nome'];
            return $this->contactModel->getContactsByNome($nome);

        } else {
            return $this->contactModel->getAllContacts();
        }
    }
}
