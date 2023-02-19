import {InfoContainer, TimesWinner} from "./styles"

interface GameInfoProps{
    infoGame: {
        playerOne: number,
        ties: number,
        playerTwo: number
    }
}

export const GameInfo = ({infoGame:{playerOne, ties, playerTwo}}:GameInfoProps) =>{
    return(
        <InfoContainer>
            <TimesWinner winnerValue="playerOne">
                <div>X (Player1)</div>
                <div>{playerOne}</div>
            </TimesWinner>
            <TimesWinner winnerValue="ties">
                <div>Ties</div>
                <div>{ties}</div>
            </TimesWinner>
            <TimesWinner winnerValue="playerTwo">
                <div>O (Player2)</div>
                <div>{playerTwo}</div>
            </TimesWinner>
        </InfoContainer>
    )
}