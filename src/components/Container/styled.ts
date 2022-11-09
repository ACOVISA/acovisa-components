import styled from "styled-components";

export const Card = styled.div`
    flex: 1;
    padding: 3.5rem;
    border: solid 1px ${(porps) => porps.theme['blue-800']};;
    background: ${(porps) => porps.theme['white']};
    display: flex;
    flex-direction: column;
    margin:0.5rem 0.5rem 0.5rem 0.5rem;
    font-family:Arial, Helvetica, sans-serif;
    h1 {
        font-size: 1.5rem;
        color: ${(porps) => porps.theme['blue-800']};
        text-align: center
    }
`