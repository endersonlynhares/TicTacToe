import { ArrowCounterClockwise } from "phosphor-react"
import {TurnContainer, OptionPlayer, TurnPlayer, ResetGame} from "./styles"
import { GameContext } from "../../contexts/GameContext"
import { useContext } from "react"
// interface GameTurnProps{
//     winner: string | null,
//     xIsNext: boolean,
//     checkTie: boolean,
//     resetGame: () => void
// }

export const GameTurn = () =>{

    const {winner, tie, xIsNext, squares, resetGame} = useContext(GameContext)

    return(
        <TurnContainer>
            <OptionPlayer></OptionPlayer>
            <TurnPlayer>
                {(!winner && !tie) && "Turn " + (xIsNext ? "X" : "O")}
                {winner && "Winner "+winner}
                {tie && "Tie"}
            </TurnPlayer>
            <ResetGame onClick={resetGame} type="button">
                <ArrowCounterClockwise size={24} />
            </ResetGame>
        </TurnContainer>
    )
}