import { useState } from 'react';
import { SideBarAccordion } from './SideBarComponents/SideBarAccordions';
import { SideBarContainer } from './sidebar.styles';
import { FaHouse } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";



// Lista de itens do Menu
const listItemsMenu = [

    // Home
    // Onde são exibidos os contatos cadastrados
    {
        "id": "1",
        "name": "Home",
        "icon": <FaHouse className='navbar-icon'/>,
        "expandable": false,
        "link": "/"
    },

    // Contatos
    // Menu onde se cadastra os contatos
    {
      "id": "2",
      "name": "Contatos",
      "icon": <FaBook className='navbar-icon'/>,
      "expandable": true,
      "subitems": [
        {
          "subname": "Cadastrar Contatos",
          "link": "/cadastrar-contatos"
        }
      ]
    },
  ]


export const SideBar = () => {

  // Define qual botão do menu está ativo
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <SideBarContainer>
      {/* Renderiza todos os itens do menu em formato de lista dinamicamente, a lista está acima. */}
      {
        listItemsMenu.map((item, index) => {
          return (
            <SideBarAccordion
            key={index}
            index={index}
            expandable={item.expandable}
            icon={item.icon}
            item={item.name}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            subitems={item.subitems}
            link={item.link}
          />
          )
        })
      }
    </SideBarContainer>
  )
}
