import {MainContainer} from "./styles"
import { GameTurn } from "../GameTurn"
import { GameBoard } from "../GameBoard"
import { GameInfo } from "../GameInfo"

export const GameContainer = () =>{
    return(
        <MainContainer>
            <GameTurn />
            <GameBoard />
            <GameInfo />
        </MainContainer>
    )
}