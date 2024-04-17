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
    color: #FFFFFF;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;

    & select {
        padding: 0.5em;
        border: none;
        cursor: pointer;
        background-color: #c7c7c7;
    }

    & input {
        padding: 0.45em;
        width: 30%;
        border: solid 1px #c7c7c7;
    }

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


export const TableWrapper = styled.div`
    max-height: 30em;
    overflow-y: auto;
    padding: 1em;
    margin-top: 2em;
    background-color: #FFFFFF;

    @media (max-height: 900px) {
        max-height: 20em;
    }

    @media (max-height: 670px) {
        max-height: 15em;
    }
`

export const Table = styled.table`
    margin: auto;
    border-collapse: collapse;
    width: 100%;


    @media (max-width: 900px) {
        width: 50%;
    }
    
`

export const TableHead = styled.thead`
    background-color: #c7c7c7;
`

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`

export const TableHeader = styled.th`
    padding: 0.5em;
    text-align: left;
    border-bottom: 1px solid #ddd;

    @media (max-width: 1210px) {
        padding: 0.3em;
    }
`

export const TableBody = styled.tbody`

`;

export const TableCell = styled.td`
    padding: 0.6em;
    font-size: 0.9em;
    border-bottom: 1px solid #ddd;

    @media (max-width: 1210px) {
        padding: 0.3em;
    }
`