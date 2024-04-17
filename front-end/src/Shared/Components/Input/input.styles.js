import { styled } from "styled-components";

export const DivInput = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    padding: 1em 0.5em;
    border-radius: 10px;
    margin: 1em 0 0 0;
    display: flex;
    width: 100%;
`

export const Input = styled.input`
    font-size: 1em;
    padding: 0 1em;
    background-color: transparent;
    border: none;
    width: 100%;
    color: #000000;

    &:focus {
        outline: none;
        border: 1px solid transparent; /* Adiciona uma borda transparente */
    }
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 0.8em;
`