import {MainContainer} from "./styles"
import { GameTurn } from "../GameTurn"
import { GameBoard } from "../GameBoard"
import { GameInfo } from "../GameInfo"
import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../contexts/GameContext"



export const GameContainer = () =>{
    return(
        <MainContainer>
            <GameTurn/>
            <GameBoard />
            <GameInfo/>
        </MainContainer>
    )
}