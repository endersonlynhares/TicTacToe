import { ArrowCounterClockwise } from "phosphor-react"
import {TurnContainer, OptionPlayer, TurnPlayer, ResetGame} from "./styles"

interface GameTurnProps{
    winner: string | null,
    xIsNext: boolean,
    checkTie: boolean,
    resetGame: () => void
}

export const GameTurn = ({winner, xIsNext, checkTie, resetGame}:GameTurnProps) =>{
    return(
        <TurnContainer>
            <OptionPlayer></OptionPlayer>
            <TurnPlayer>
                {(!winner && !checkTie) && "Turn " + (xIsNext ? "X" : "O")}
                {winner && "Winner "+winner}
                {checkTie && "Tie"}
            </TurnPlayer>
            <ResetGame onClick={resetGame} type="button">
                <ArrowCounterClockwise size={24} />
            </ResetGame>
        </TurnContainer>
    )
}