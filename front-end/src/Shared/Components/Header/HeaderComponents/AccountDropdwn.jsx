import Dropdown from 'react-bootstrap/Dropdown';



const HeaderAccountDropdown = ({ name, accounts }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className='drop-down-button'>
          {name}
        </Dropdown.Toggle>

        <Dropdown.Menu className='drop-down-menu-show'>
          {/* <Dropdown.Item href="#/action-1">{firstAction}</Dropdown.Item> */}

          {accounts}

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HeaderAccountDropdown;