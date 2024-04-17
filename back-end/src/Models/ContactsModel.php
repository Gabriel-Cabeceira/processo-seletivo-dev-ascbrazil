<?php

namespace App\Models;

use PDO;
use PDOException;

class Contacts {

    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function insert($campanha, $nome, $sobrenome, $email, $telefone, $endereco, $cidade, $cep, $dataNascimento) {
        try {
            $stmt = $this->pdo->prepare("INSERT INTO contatos (campanha, nome, sobrenome, email, telefone, endereco, cidade, cep, dataNascimento) VALUES (:campanha, :nome, :sobrenome, :email, :telefone, :endereco, :cidade, :cep, :dataNascimento)");
            $stmt->bindParam(':campanha', $campanha);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':sobrenome', $sobrenome);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':telefone', $telefone);
            $stmt->bindParam(':endereco', $endereco);
            $stmt->bindParam(':cidade', $cidade);
            $stmt->bindParam(':cep', $cep);
            $stmt->bindParam(':dataNascimento', $dataNascimento);
            $stmt->execute();
            return true;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
    

    public function getContactsByCampanha($campanha) {
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM contatos WHERE campanha = :campanha");
            $stmt->bindParam(':campanha', $campanha);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getContactsByTelefone($telefone) {
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM contatos WHERE telefone = :telefone");
            $stmt->bindParam(':telefone', $telefone);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getContactsByEmail($email) {
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM contatos WHERE email = :email");
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getContactsByNome($nome) {
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM contatos WHERE nome = :nome");
            $stmt->bindParam(':nome', $nome);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }

    public function getAllContacts() {
        try {
            $stmt = $this->pdo->prepare("SELECT * FROM contatos");
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e;
            return [];
        }
    }
}
