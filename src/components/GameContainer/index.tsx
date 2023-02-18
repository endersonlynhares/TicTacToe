import {MainContainer} from "./styles"
import { GameTurn } from "../GameTurn"
import { GameBoard } from "../GameBoard"

export const GameContainer = () =>{
    return(
        <MainContainer>
            <GameTurn />
            <GameBoard />
        </MainContainer>
    )
}