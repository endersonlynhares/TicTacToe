import styled from "styled-components";

export const SquareButton = styled.button`
    width: 70%;
    height: 150px;
    color: ${props => props.theme["cian-100"]};
    font-weight: 1000;
    font-size: 6rem;
    background:${props => props.theme["cian-700"]};
    box-shadow: 0px 8px 0px ${props => props.theme["cian-900"]};
    border: 0;
    border-radius: 10px;
`

const COLOR_PLAYER = {
    O: "yellow-200",
    X: "cian-100"
} as const

interface TurnPlayerProps{
    turnPlayer: keyof typeof COLOR_PLAYER
}

export const TurnPlayer = styled.span<TurnPlayerProps>`
    color: ${props => props.theme[COLOR_PLAYER[props.turnPlayer]]};
`