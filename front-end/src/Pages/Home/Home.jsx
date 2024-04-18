// Importações de ícones do React Icons
import { FaHouse } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

// Importações dos componentes estilizados
import {
    Main,
    Title,
    LocationBox,
    BoxFilter,
    FilterTitle,
    FilterForm,
} from "./Home.styles";

import {
    TableWrapper,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from "./Home.styles";

// Importações dos hooks
import { useEffect, useState } from "react";

// Importação das requisições à API
import { getContatos } from "../../Services/getContatosAPI";

// Componente Home
export const Home = () => {
    // Define o estado inicial da lista de contatos, Uma lista vazia | Utilizando o hook useState
    const [contatos, setContatos] = useState([]);

    // Define o estado inicial dos filtros
    const [filtros, setFiltros] = useState({});

    // Faz a requisição à API | utilizando o hook useEffect
    useEffect(() => {
        // Operação assincrona
        const fetchContatos = async () => {
            // Bloco Try - Catch para tratamento de erros
            try {
                const response = await getContatos.get();
                setContatos(response.data);
            } catch (error) {
                console.error("Erro ao obter contatos:", error);
            }
        };

        fetchContatos();
    }, []);

    // Função para filtrar contatos
    const filtrarContatos = async (e) => {
        e.preventDefault();

        try {
            // Faz a requisição à API com os filtros
            const response = await getContatos.get(
                `?${filtros.opcaoFiltro}=${filtros.identificador}`
            );

            // Atualiza o estado dos contatos com os resultados da busca
            setContatos(response.data);
        } catch (error) {
            console.error("Erro ao buscar contatos:", error);
        }
    };

    // Função para limpar os filtros
    const limparFiltros = async () => {
        setFiltros({});
    };

    return (
        <Main>
            <Title>Contatos Cadastrados</Title>

            {/* Box que indica a localização do usuário na aplicação */}
            <LocationBox>
                <FaHouse className="locationIcons" />
                <span>Home</span>
                <IoIosArrowForward />
                <span>Contatos Cadastrados</span>
            </LocationBox>

            {/* Box do filtro */}
            <BoxFilter>
                <FilterTitle>
                    <IoIosSearch className="FilterIcon" />
                    <h1>Filtrar</h1>
                </FilterTitle>

                {/* Formulário para filtragem dos contatos */}
                <FilterForm>
                    <select
                        name=""
                        id=""
                        onChange={(e) =>
                            setFiltros({
                                ...filtros,
                                opcaoFiltro: e.target.value,
                            })
                        }
                    >
                        <option selected disabled hidden>
                            Busca por filtro
                        </option>
                        <option value="campanha">Campanha</option>
                        <option value="telefone">Telefone</option>
                        <option value="email">E-mail</option>
                        <option value="nome">Nome</option>
                    </select>

                    <input
                        name=""
                        type="text"
                        onChange={(e) =>
                            setFiltros({
                                ...filtros,
                                identificador: e.target.value,
                            })
                        }
                    />

                    <button className="search" onClick={filtrarContatos}>
                        Buscar
                    </button>

                    <button className="clear" onClick={limparFiltros}>
                        Limpar Filtros
                    </button>
                </FilterForm>
            </BoxFilter>

            {/* Tabela de exibição dos contatos*/}
            <TableWrapper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Campanha</TableHeader>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Sobrenome</TableHeader>
                            <TableHeader>E-mail</TableHeader>
                            <TableHeader>Telefone</TableHeader>
                            <TableHeader>Endereço</TableHeader>
                            <TableHeader>Cidade</TableHeader>
                            <TableHeader>CEP</TableHeader>
                            <TableHeader>Data de Nascimento</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contatos.map((contato) => (
                            <TableRow key={contato.id}>
                                <TableCell>{contato.campanha}</TableCell>
                                <TableCell>{contato.nome}</TableCell>
                                <TableCell>{contato.sobrenome}</TableCell>
                                <TableCell>{contato.email}</TableCell>
                                <TableCell>{contato.telefone}</TableCell>
                                <TableCell>{contato.endereco}</TableCell>
                                <TableCell>{contato.cidade}</TableCell>
                                <TableCell>{contato.cep}</TableCell>
                                <TableCell>{contato.dataNascimento}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableWrapper>
        </Main>
    );
};
