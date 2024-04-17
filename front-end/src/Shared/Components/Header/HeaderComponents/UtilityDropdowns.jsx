import Dropdown from 'react-bootstrap/Dropdown';


const HeaderUtilityDropdown = ({ icon, children }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle className='drop-down-button no-after'>
          {icon}
        </Dropdown.Toggle>

        <Dropdown.Menu className='drop-down-menu-show'>
            {children}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HeaderUtilityDropdown;