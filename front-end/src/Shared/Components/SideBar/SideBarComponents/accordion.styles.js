import styled from "styled-components";



export const AccordionContainer = styled.div`
    .linkRoutes {
        text-decoration: none;
        color: #FFFFFF;
    }
`

export const Divisor = styled.div`
    
`

export const AccordionButton = styled.button`

    background-color: transparent;
    width: 100%;
    text-align: left;
    font-size: 0.8em;
    color: #FFFFFF;
    border: none;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-icon {
        font-size: 1.4em;
        margin-right: 10px;
    }

    .arrow-icon {
        font-size: 1.7em;
    }

    .rotate-arrow-icon {
        transform: rotate(90deg);
        transition: transform 0.3s ease;
    }

    &:hover {
        background-color: #0e6390;
    }

    &::after {
        display: ${({ active }) => (active ? 'block' : 'none')};
        content: "";
        position: absolute;
        right: 0;
        border: 8px solid transparent;
        border-width: 14px 10px;
        border-right-color: #e9f0f9;
    }
    
`

export const AccordionContent = styled.div`
    width: 100%;
    color: #FFFFFF;


    &.colapse {
        height: 0;
        overflow: hidden;
        transition: height 0.3s ease;
    }

    &.show {
        height: 300px;
        transition: height 0.3s ease;
    }

    background-color: #2fa6e0;
    transition: height 0.3s ease;
`

export const SubButton = styled.button`
    background-color: transparent;
    width: 100%;
    text-align: left;
    font-size: 0.8em;
    color: #FFFFFF;
    border: none;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover {
        background-color: #43b7f0;
    }

    &::before {
        content: "";
        display: block;
        position: absolute; 
        width: 9px;
        left: 20px;
        top: 20px;
        border-top: 1px dashed rgba(255, 255, 255, 0.5);
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 18px;
        width: 0;
        border-left: 1px dashed rgba(255, 255, 255, 0.5);
    }

    .span {
        margin-left: 30px;
    }

`

export const ReportButton = styled.button`
    background-color: transparent;
    width: 100%;
    text-align: left;
    font-size: 0.75em;
    color: #FFFFFF;
    border: none;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover {
        background-color: #43b7f0;
    }

    &::before {
        content: "";
        display: block;
        position: absolute; 
        width: 20px;
        left: 20px;
        top: 20px;
        border-top: 1px dashed rgba(255, 255, 255, 0.5);
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 18px;
        width: 0;
        border-left: 1px dashed rgba(255, 255, 255, 0.5);
    }

    .span {
        margin-left: 40px;
    }
`