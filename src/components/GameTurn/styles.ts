import styled from "styled-components";

export const TurnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const OptionPlayer = styled.div`
    display: flex;
    font-size: 2.5rem;
    font-weight: 1000;
    gap: 10px;
    &:before{
        content: "X";
        color: ${props => props.theme["cian-100"]};
    }

    &:after{
        content: "O";
        color: ${props => props.theme["yellow-200"]};
    }
`

export const TurnPlayer = styled.div`
    padding: 10px 31px;
    background:${props => props.theme["cian-700"]};
    box-shadow: 0px 4px 0px ${props => props.theme["cian-900"]};
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 1000;
    text-transform: uppercase;
    margin-left: -10px;
    text-align: center;
`

export const ResetGame = styled.button`
    background: ${props => props.theme["gray-200"]};
    border: 0;
    padding: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.1s;

    &:hover{
        background: ${props => props.theme["gray-300"]};
        color: white; 
    }
 `