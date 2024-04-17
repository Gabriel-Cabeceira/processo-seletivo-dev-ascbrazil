import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";



const HeaderUserDropdown = ({ name}) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className='drop-down-button'>
          {name}
        </Dropdown.Toggle>

        <Dropdown.Menu className='drop-down-menu-show'>
          <Dropdown.Item href="#/action-1">
            <FaUser className='drop-down-icon' />
            Preferências
          </Dropdown.Item>

          <Dropdown.Item href="#/action-2">
            <FaInfoCircle className='drop-down-icon'/>
            Sobre
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item className='drop-down-menu-button' href="#/action-4">
            <FaPowerOff className='drop-down-icon'/>
            Sair do sistema
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HeaderUserDropdown;