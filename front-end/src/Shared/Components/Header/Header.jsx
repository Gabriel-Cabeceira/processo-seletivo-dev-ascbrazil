import HeaderAccountDropdown from "./HeaderComponents/AccountDropdwn";
import Dropdown from "react-bootstrap/Dropdown";
import HeaderUserDropdown from "./HeaderComponents/UserDropdown";
import { DropDowns, MainHeader, UtilityDropDowns, NavBarBrand, Title, LeftDiv, RightDiv } from "./header.styles";
import { FaDesktop } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import HeaderUtilityDropdown from "./HeaderComponents/UtilityDropdowns";

export const Header = () => {
  const accounts = [
    "Conta 1",
    "Conta 2"
  ];

  return (
    <MainHeader>
      <LeftDiv>
        {/* Nome e link da plataforma */}
        <NavBarBrand>
          <FaDesktop size={20} />
          <Title>ASC Brazil | Registra Contatos</Title>
        </NavBarBrand>
      </LeftDiv>

      <RightDiv>
        <UtilityDropDowns>
          {/* Agentes pré pausados */}
          <HeaderUtilityDropdown
            icon={<FaUser />}
            children={
              <Dropdown.Item href="#/action-1" active>
                Agentes pré-pausados
              </Dropdown.Item>
            }
          />

          {/* Monitoramento de palavras */}
          <HeaderUtilityDropdown
            icon={<FaBinoculars />}
            children={
              <>
                <Dropdown.Item href="#/action-1" active>
                  Monitoramento de palavras
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Nenhuma nova notificação
                </Dropdown.Item>
              </>
            }
          />

          {/* Mensagens do agentes */}
          <HeaderUtilityDropdown
            icon={<FaCommentDots />}
            children={
              <>
                <Dropdown.Item href="#/action-1" active>
                  Mensagens Agentes
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Nenhuma nova Mensagem
                </Dropdown.Item>
              </>
            }
          />

          {/* Notificações */}
          <HeaderUtilityDropdown
            icon={<FaBell />}
            children={
              <Dropdown.Item href="#/action-1" active>
                Nenhuma nova notificação
              </Dropdown.Item>
            }
          />

          {/* Alertas */}
          <HeaderUtilityDropdown
            icon={<FaExclamationTriangle />}
            children={
              <Dropdown.Item href="#/action-1" active>
                Nenhum novo alerta
              </Dropdown.Item>
            }
          />
        </UtilityDropDowns>

        {/* Dropdowns for user options and select account */}
        <DropDowns>
          <HeaderAccountDropdown
            name="Selecione uma Conta"
            accounts={accounts.map(function (account, index) {
              return (
                <Dropdown.Item key={index} href="#/action-1">
                  {account}
                </Dropdown.Item>
              );
            })}
          />

          <HeaderUserDropdown name="Gabriel Gonçalves" />
        </DropDowns>
      </RightDiv>
    </MainHeader>
  );
};
