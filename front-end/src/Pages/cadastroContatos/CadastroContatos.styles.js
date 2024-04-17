import styled from "styled-components";

export const Main = styled.main`
    width: 95%;
    margin: auto;
`


export const Title = styled.h1`
    font-size: 2em;
    font-weight: 400;    
`

export const LocationBox = styled.div`
    width: 100%;
    font-size: 0.8em;
    padding: 0.5em;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    color: #999999;

    & .locationIcons {
        margin-left: 1em;
        margin-right: 0.5em;
    }
`

export const BoxFilter = styled.div`
    width: 100%;
    margin-top: 2em;
`

export const FilterTitle = styled.div`
    width: 100%;
    padding: 0.5em;
    color: #FFFFFF;
    background-color: #2fa6e0;
    display: flex;
    align-items: center;

    & h1 {
        margin: 0;
        font-size: 1.5em;
    }

    & .FilterIcon {
        font-size: 2em;
    }
`

export const FilterForm = styled.form`
    width: 100%;
    padding: 0.5em;
    background-color: #FFFFFF;

    & .search {
        padding: 0.5em;
        border: none;
        background-color: #A200FF;
        color: #FFFFFF;
    }

    & .search:hover {
        background-color: #8000c9;
    }

    & .clear {
        padding: 0.5em;
        margin: 0.5em;
        border: none;
        background-color: #e30022;
        color: #FFFFFF;
    }

    & .clear:hover {
        background-color: #9e0018;
    }
`


export const RequestStatus = styled.div`
    width: 40%;
    padding: 0.5em;
    background-color: #24e00799;
    text-align: center;
`

export const FileError = styled.div`
    width: 40%;
    padding: 0.5em;
    font-weight: bold;
    background-color: #e3002299;
    text-align: center;
    margin-bottom: 1em;
`

export const Divisor = styled.div`
    display: flex;
    flex-direction: column;

    & input {
        padding: 0.45em;
        margin-bottom: 2em;
        width: 40%;
        border: solid 1px #c7c7c7;
    }
`
