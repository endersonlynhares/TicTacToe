import {InfoContainer, TimesWinner} from "./styles"

export const GameInfo = () =>{
    return(
        <InfoContainer>
            <TimesWinner winnerValue="playerOne">
                <div>X (PlayerOne)</div>
                <div>0</div>
            </TimesWinner>
            <TimesWinner winnerValue="ties">
                <div>Ties</div>
                <div>0</div>
            </TimesWinner>
            <TimesWinner winnerValue="playerTwo">
                <div>O (PlayerOne)</div>
                <div>0</div>
            </TimesWinner>
        </InfoContainer>
    )
}