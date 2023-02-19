import styled from "styled-components";

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`

const COLOR_INFO_WIN = {
    playerOne: "cian-100",
    ties: "gray-200",
    playerTwo: "yellow-200"
} as const

interface TimesWinnerProps{
    winnerValue: keyof typeof COLOR_INFO_WIN
}

export const TimesWinner = styled.div<TimesWinnerProps>`
    display: flex;
    
    justify-content: center;
    aligh-items: center;
    flex-direction: column;
    width: 100%;
    color: ${props => props.theme["cian-800"]};
    background: ${props => props.theme[COLOR_INFO_WIN[props.winnerValue]]};
    border-radius: 10px;
    padding: 10px;
    height: 80px;
    text-align: center;
    text-transform: uppercase;

   div{
        &:last-child{
            font-size: 1.2rem;
            font-weight: 1000;
        }
   }

`