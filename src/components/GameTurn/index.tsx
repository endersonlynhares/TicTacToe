import { ArrowCounterClockwise } from "phosphor-react"
import {TurnContainer, OptionPlayer, TurnPlayer, ResetGame} from "./styles"

export const GameTurn = () =>{
    return(
        <TurnContainer>
            <OptionPlayer></OptionPlayer>
            <TurnPlayer>Turn X</TurnPlayer>
            <ResetGame type="button">
                <ArrowCounterClockwise size={24} />
            </ResetGame>
        </TurnContainer>
    )
}