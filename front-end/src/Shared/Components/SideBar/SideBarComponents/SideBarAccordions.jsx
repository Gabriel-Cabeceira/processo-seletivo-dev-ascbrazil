import { useState, useEffect } from "react";
import { AccordionButton, AccordionContainer, AccordionContent, Divisor, ReportButton, SubButton } from "./accordion.styles";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";



const SideBarAccordion = ({
  item,
  index,
  icon,
  expandable,
  activeIndex,
  setActiveIndex,
  subitems,
  link
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [iconRotated, setIconRotated] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const heightButtons = 40.04; // Altura dos botões


  useEffect(() => {
    if (isContentVisible && subitems) {
      const buttonHeight = heightButtons; 
      const reportButtonHeight = heightButtons; 
  
      // Calcula a altura dos SubButtons
      const subItemsHeight = subitems.length * buttonHeight;
  
      // Calcula a altura dos ReportButtons, se existirem
      const reportsHeight =
        subitems
          .filter((subitem) => subitem.reports && Array.isArray(subitem.reports))
          .reduce((totalHeight, subitem) => totalHeight + subitem.reports.length * reportButtonHeight, 0) || 0;
  
      setContentHeight(subItemsHeight + reportsHeight);
    } else {
      setContentHeight(0);
    }
  }, [isContentVisible, subitems]);
  
    

  const handleClick = () => {
    // Inverte o estado de isContentVisible
    setIsContentVisible(!isContentVisible);
  
    if (index !== activeIndex) {
      // Se o botão clicado é diferente do que está ativo, atualiza o estado e ícone
      setActiveIndex(index);
      setIconRotated(true);
    } else {
      // Se o botão clicado é o mesmo que já está ativo, apenas inverte o estado do ícone
      setIconRotated(!iconRotated);
    }
  };
  

  return (
    <AccordionContainer>
      {expandable ? (
        <AccordionButton onClick={handleClick} active={index === activeIndex}>
          <Divisor>
            {icon}
            {item}
          </Divisor>
          {expandable && (
            <IoIosArrowForward
              className={`arrow-icon${iconRotated ? " rotate-arrow-icon" : ""}`}
            />
          )}
        </AccordionButton>
      ) : (
        // Se não for expansível, adiciona o Link diretamente
        <Link to={link} className="linkRoutes">
          <AccordionButton onClick={handleClick} active={index === activeIndex}>
            <Divisor>
              {icon}
              {item}
            </Divisor>
          </AccordionButton>
        </Link>
      )}

      {expandable && (
        <AccordionContent
          className={isContentVisible ? "show" : "colapse"}
          style={{ height: `${contentHeight}px` }}
        >
          {/* Mapea e renderiza os subitens */}
          {subitems &&
            subitems.map((subitem, subIndex) => (
              <Link className="linkRoutes" to={subitem.link || "#"}>
                <SubButton key={subIndex}>
                  <span className="span">{subitem.subname}</span>
                </SubButton>
              </Link>
            ))}

          {/* Mapea e renderiza os relatórios, caso existam na função*/}
          {subitems &&
            subitems.map((subitem, subIndex) => (
              subitem.reports && Array.isArray(subitem.reports) &&
              subitem.reports.map((report, reportIndex) => (
                <ReportButton key={reportIndex}>
                  <span className="span">{report.reportName}</span>
                </ReportButton>
              ))
            ))}
        </AccordionContent>
      )}
    </AccordionContainer>
  );
};

export { SideBarAccordion };