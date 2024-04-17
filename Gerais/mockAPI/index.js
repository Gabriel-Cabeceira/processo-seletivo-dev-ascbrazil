const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Importe o pacote multer para lidar com uploads de arquivos
const csv = require('csv-parser'); // Importe o pacote csv-parser para analisar arquivos CSV
const fs = require('fs'); // Importe o módulo fs para trabalhar com o sistema de arquivos
const app = express();
const PORT = process.env.PORT || 8001;

// Dados dos contatos
const contatos = [
  {
    'id': '1',
    'campanha': 'Campanha Teste',
    'nome': 'Gabriel',
    'sobrenome': 'Cabeceira',
    'email': 'gabriel@teste.com',
    'telefone': '5534992201095',
    'endereco': 'Rua Aristides Fernandes Morais',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '05/03/1999'
  },
  {
    'id': '2',
    'campanha': 'Campanha Teste',
    'nome': 'Aline',
    'sobrenome': 'Cabeceira',
    'email': 'aline@teste.com',
    'telefone': '5534999211470',
    'endereco': 'Rua Aristides Fernandes Morais',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '13/01/1998'
  },
  {
    'id': '3',
    'campanha': 'Minha Segunda Campanha',
    'nome': 'Alexandre',
    'sobrenome': 'Ribeiro',
    'email': 'alexandre@teste.com',
    'telefone': '5534998745241',
    'endereco': 'Avenida Cesário Crosara',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '13/01/1998'
  },
  {
    'id': '4',
    'campanha': 'Minha Segunda Campanha',
    'nome': 'Gabriela',
    'sobrenome': 'Ribeiro',
    'email': 'gabriela@teste.com',
    'telefone': '5561998756321',
    'endereco': 'Avenida Cesário Crosara',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '13/01/1998'
  },
  {
    'id': '5',
    'campanha': 'Minha Terceira Campanha',
    'nome': 'Pedro',
    'sobrenome': 'Ribeiro',
    'email': 'pedro@teste.com',
    'telefone': '5561998756321',
    'endereco': 'Avenida Cesário Crosara',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '28/08/2024'
  },
  {
    'id': '6',
    'campanha': 'Minha Terceira Campanha',
    'nome': 'Pedro',
    'sobrenome': 'Ribeiro',
    'email': 'pedro@teste.com',
    'telefone': '5561998756321',
    'endereco': 'Avenida Cesário Crosara',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '28/08/2024'
  },
  {
    'id': '7',
    'campanha': 'Minha Terceira Campanha',
    'nome': 'Pedro',
    'sobrenome': 'Ribeiro',
    'email': 'pedro@teste.com',
    'telefone': '5561998756321',
    'endereco': 'Avenida Cesário Crosara',
    'cidade': 'Uberlândia',
    'cep': '38401-746',
    'dataNascimento': '28/08/2024'
  },
];

// Use o middleware do CORS
app.use(cors());

// Rota para obter a lista de contatos
app.get('/getContatos', (req, res) => {
    // Verifica se há parâmetros de consulta para filtrar os contatos
    const { campanha, telefone, email, nome } = req.query;
    let contatosFiltrados = contatos;
  
    // Aplica os filtros, se fornecidos
    if (campanha) {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.campanha === campanha);
    }
    if (telefone) {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.telefone === telefone);
    }
    if (email) {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.email === email);
    }
    if (nome) {
      contatosFiltrados = contatosFiltrados.filter(contato => contato.nome === nome);
    }
  
    // Retorna os contatos filtrados
    res.json(contatosFiltrados);
});




// Configuração do multer para lidar com uploads de arquivos
const upload = multer({ dest: 'uploads/' });

// Rota para receber o arquivo CSV e o campo "campanha"
app.post('/postContatos', upload.single('arquivoCsv'), (req, res) => {
    const campanha = req.body.campanha; // Obtém o valor do campo "campanha" do corpo da requisição
    const filePath = req.file.path; // Obtém o caminho do arquivo temporário

    // Imprime o corpo da requisição para debug
    console.log(req.body);

    const destino = './uploads/' + req.file.originalname; // Especifica o caminho de destino

    // Move o arquivo para o diretório desejado
    fs.rename(filePath, destino, (err) => {
        if (err) {
            console.error('Erro ao mover o arquivo:', err);
            return res.status(500).send('Erro ao salvar o arquivo.');
        }

        console.log('Arquivo salvo com sucesso em:', destino);
        res.status(200).send('Arquivo salvo com sucesso.');
    });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
