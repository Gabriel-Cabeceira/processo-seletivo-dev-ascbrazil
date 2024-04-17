import { useState, useRef } from "react";
import { FaHouse } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";


import {
    Main,
    Title,
    LocationBox,
    BoxFilter,
    FilterTitle,
    FilterForm,
    Divisor,
    RequestStatus,
    FileError,
} from "./CadastroContatos.styles";
import { postContatos } from "../../Services/postContatosAPI";
import { LoadingBar } from "./Components/LoadingBar";

export const CadastroContatos = () => {

    // Estado inicial da barra de navegação
    const [loading, setLoading] = useState(0);

    // Estado inicial do armazenamento arquivo csv
    const [arquivoCsv, setArquivoCsv] = useState(null);

    // Estado inicial do armazenamento do campo "Campanha"
    const [campanha, setCampanha] = useState("");

    // Estado inicial que controla a exibição do erro de campo obrigatório
    const [erroCampoObrigatorio, setErroCampoObrigatorio] = useState(false);

    // Estado que controla a mensagem de sucesso após upload
    const [success, setSuccess] = useState(false);

    // Referencia do input de upload
    const inputArquivoRef = useRef(null);

    // Estado inicial do alerta de colunas faltantes
    const [colunasFaltantes, setColunasFaltantes] = useState(false);

    // Estado inicial do alerta de dados inválidos
    const [numerosInvalidos, setNumerosInvalidos] = useState(false);

    // Estado inicial do alerta de dados faltantes
    const [dadosFaltantes, setDadosFaltantes] = useState(false);

    // Função que controla o estado desabilitado do botão salvar
    const [salvarDisabled, setSalvarDisabled] = useState(false);



    // Função que valida se os números estão corretos, contendo DDI 55 referente ao Brasil e se as colunas estão corretas, contendo todas as informações (Talvez Obrigatórios: Número, Nome, Campanha)
    const validarCSV = (conteudoCSV) => {

        // Função para limpar os caracteres especiais dos números de telefone
        const limparNumeroTelefone = (numero) => {
            if (typeof numero === 'string') {
                // Remove caracteres especiais e espaços em branco
                return numero.replace(/[-()\s]/g, '');
            } else {

                return numero;
            }
        };
        
    
        // Verifica se o CSV contém todas as colunas necessárias
        const colunasNecessarias = ['Nome', 'Sobrenome', 'Email', 'Telefone', 'Endereço', 'Cidade', 'CEP', 'Data de Nascimento'];

        const linhas = conteudoCSV.split('\n');
        const totalLinhas = linhas.length - 1; // Desconsiderar o cabeçalho
    
        // Verifica a primeira linha para detectar o delimitador do cabeçalho (, ou ;)
        const cabecalhoDelimitador = linhas[0].includes(',') ? ',' : ';';
    
        // Divide o conteúdo do CSV em linhas, considerando o delimitador do cabeçalho
        const cabecalho = linhas[0].trim().split(cabecalhoDelimitador);
    
        for (const coluna of colunasNecessarias) {
            if (!cabecalho.includes(coluna)) {
                // console.error(`Erro: O arquivo CSV não contém a coluna "${coluna}".`);
                setColunasFaltantes(true);
                return false;
            }
        }
    
        // Verifica a segunda linha para detectar o delimitador dos dados (;)
        const dadosDelimitador = linhas[1].includes(',') ? ',' : ';';
    
        // Verificar se há linhas de dados vazias
        const dados = linhas.slice(1).map(linha => linha.trim().split(dadosDelimitador));

        // Lista que armazenará os números inválidos, se houverem
        const telefonesInvalidos = [];
    
        // Loop que fará a verificação do progresso do processamento para que a barra de progresso seja atualizada
        for (let i = 0; i < totalLinhas; i++) {
            const dado = dados[i];

            if (dado && dado.length >= 8) {
                
                let [nome, sobrenome, email, telefone, endereco, cidade, cep, dataNascimento] = dado;
        
                // Limpa o número de telefone removendo caracteres especiais
                telefone = limparNumeroTelefone(telefone);
            
                if (nome === '' || telefone === '') {
                    // console.error('Erro: Há contatos com dados faltantes (Nome ou Telefone vazios).');
                    setDadosFaltantes(true);
                    return false;
                }
            
                // Verificar se o telefone tem o DDI 55
                if (!telefone.startsWith('55')) {
                    console.error(`Erro: Telefone "${telefone}" inválido (número sem DDI 55).`);
                }
            
                // Verificar se o telefone é fixo ou móvel
                const regexTelefoneFixo = /^[1-9]{2}[2-5]{1}[0-9]{7}$/;
                const regexTelefoneMovel = /^[1-9]{2}9[8-9]{1}[0-9]{7}$/;
            
                // Verificar se o telefone é fixo
                if (!regexTelefoneFixo.test(telefone.substring(2))) {
                    // Verificar se o telefone é móvel
                    if (!regexTelefoneMovel.test(telefone.substring(2))) {
                        telefonesInvalidos.push(telefone);
                    }
                }
            } // else {
            //     console.error('Erro: Dados inválidos ou incompletos.');

            //     console.log('debug aqui novamente');
            // }

            // Atualizar o estado de loading com base no progresso
            const progresso = ((i + 1) / totalLinhas) * 100;
            setLoading(progresso);
        }

        
        // Após o loop, verifique se há telefones inválidos
        if (telefonesInvalidos.length > 0) {
            setNumerosInvalidos(true);
            return false;
        }

        // Se passar por todas as verificações, o arquivo CSV é válido
        console.log('Arquivo CSV válido.');
        return true;

        // // Redefinir o estado de loading para 0 após o processamento
        // setLoading(0);
    };
    
    
    


    // Manipula o estado do input de arquivo ao anexar
    const anexaArquivo = (event) => {
        const file = event.target.files[0];

        // Reseta os estados iniciais dos alertas para evitar alertas indesejados
        setNumerosInvalidos(false);
        setColunasFaltantes(false);
        setDadosFaltantes(false);

        // Se o arquivo estiver anexo, segue
        if (file) {
            // Verifica se o tipo do arquivo é CSV
            if (file.type !== "text/csv") {
                alert("Por favor, selecione um arquivo CSV.");
                // Limpa o input de arquivo para evitar que o arquivo incorreto seja anexado
                event.target.value = "";
                return;
            }
    
            // Lê o conteúdo do arquivo CSV
            const reader = new FileReader();
            reader.onload = (e) => {
                const conteudoCSV = e.target.result;

                // Analisar o conteúdo do arquivo e validar os dados
                const validated = validarCSV(conteudoCSV);

                if(!validated) {
                    event.target.value = "";
                }
            };
            reader.readAsText(file);
            setArquivoCsv(file);
        }
    };
    

    // Manipula o estado do input "Campanha", ao escrever no campo
    const handleCampanha = (event) => {
        const { value } = event.target;
        setCampanha(value);
    };

    // Função que lida com o processo de salvar
    const salvar = async (e) => {
        e.preventDefault();

        // Valida se campanha está preenchido e se não estiver, o estado do ErroCampoObrigatorio é configurado para 'true'
        if (!campanha) {
            setErroCampoObrigatorio(true);
            return;
        }

        if (arquivoCsv) {
            const formData = new FormData();
            formData.append("arquivoCsv", arquivoCsv);
            formData.append("campanha", campanha);

            // // DEBUG AQUIIIIIII
            // console.log(arquivoCsv);
            // console.log(campanha);

            try {
                const response = await postContatos.post("", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
                setSalvarDisabled(true),
            // console.log('Duplicata?')
            );
                
                if (response.status === 200) {
                    setSuccess(true);
                    setArquivoCsv(null);
                    setCampanha("");
                    setErroCampoObrigatorio(false);
                    inputArquivoRef.current.value = "";
                    setSalvarDisabled(false);
                } else {
                    console.error("Erro na requisição:", response.status);
                }
            } catch (error) {
                console.error("Erro ao enviar requisição:", error);
            }
        }
    };

    // Função que limpa o formulário
    const limpaForm = () => {
        setArquivoCsv(null);
        setCampanha("");
        setErroCampoObrigatorio(false);
        setSuccess(false);
        setColunasFaltantes(false);
    };

    return (
        <Main>
            <Title>Cadastro de Contatos</Title>
            <LocationBox>
                <FaHouse className="locationIcons" />
                <span>Home</span>
                <IoIosArrowForward />
                <span>Cadastro de Contatos</span>
            </LocationBox>
            <BoxFilter>
                <FilterTitle>
                    <FaRegEdit className="FilterIcon" />
                    <h1>Preencha os campos abaixo</h1>
                </FilterTitle>
                <FilterForm encType="multipart/form-data">
                    <Divisor>
                        {/* Exibe erro caso o campo obrigatório (Campanha) não tenha sido preenchido */}
                        {erroCampoObrigatorio && <span style={{ color: "red" }}>* Campo (Campanha) obrigatório</span>}
                        <label htmlFor="campanha">Campanha:</label>
                        <input
                            name="campanha"
                            type="text"
                            value={campanha}
                            onChange={handleCampanha}
                        />
                        
                        <input
                            name="arquivoCsv"
                            type="file"
                            accept=".csv"
                            onChange={anexaArquivo}
                            ref={inputArquivoRef}
                        />
                    </Divisor>

                    {/* Mensagem de Sucesso informando que a requisição foi realizada */}
                    {success && <RequestStatus>Contatos Cadastrados com sucesso!</RequestStatus>}

                    {/* Alerta caso esteja faltando colunas no arquivo */}
                    {colunasFaltantes && <FileError>Verifique as colunas de seu arquivo, há colunas faltando</FileError>}
  
                    {/* Alerta de números inválidos */}
                    {numerosInvalidos && <FileError>Números inválidos, Os números devem conter DDI 55, caso sejam números móveis deveram conter o 9° dígito</FileError>}

                    {/* Alerta de que estão faltando dados | Nome ou Telefone */}
                    {dadosFaltantes && <FileError>Verifique se há registros sem o Telefone ou o Nome</FileError>}

                    {/* Renderiza o botão somente quando habilitado - Até o processo de upload ser completo */}
                    {salvarDisabled ? (<RiLoader2Fill style={{fontSize: '2em', marginRight: '1em'}}/>) : <button className="search" onClick={salvar}>Salvar</button>}

                    <button className="clear" onClick={limpaForm}>
                        Limpar
                    </button>
                </FilterForm>
                <LoadingBar loading={loading} />
            </BoxFilter>
        </Main>
    );
};
