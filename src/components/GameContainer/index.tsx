import {MainContainer} from "./styles"
import { GameTurn } from "../GameTurn"
import { GameBoard } from "../GameBoard"
import { GameInfo } from "../GameInfo"
import { useEffect, useState } from "react"


const defineWinner = (squares:Array<string | null>) => {
    const linesDefineWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (const element of linesDefineWinner) {
        const [a, b, c] = element
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const checkTie = (squares:Array<string | null>) => {
    return squares.every((square: string | null) => square !== null)
}

export const GameContainer = () =>{
    const [infoGame, setInfoGame] = useState({
        playerOne: 0,
        ties: 0,
        playerTwo: 0
    })
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array<string | null>(9).fill(null))

    const resetGame = () =>{
        setSquares(Array<string | null>(9).fill(null))
        setXIsNext(true)
    }

    const winner = defineWinner(squares)
    const tie = checkTie(squares)

    useEffect(() =>{
        if(winner){
            if(winner == "X"){
                setInfoGame({
                    playerOne: infoGame.playerOne + 1,
                    ties:  infoGame.ties,
                    playerTwo: infoGame.playerTwo
                })
            }else{
                setInfoGame({
                    playerOne: infoGame.playerOne ,
                    ties:  infoGame.ties,
                    playerTwo: infoGame.playerTwo + 1
                })
            }
        }
    }, [winner])

   useEffect(() =>{
        if(tie){
            setInfoGame({
                playerOne: infoGame.playerOne ,
                ties:  infoGame.ties + 1,
                playerTwo: infoGame.playerTwo
            })
        }
   }, [tie])


    return(
        <MainContainer>
            <GameTurn resetGame={resetGame} winner={winner} xIsNext={xIsNext} checkTie={tie} />
            <GameBoard xIsNext={xIsNext} setXIsNext={setXIsNext} squares={squares} setSquares={setSquares} winner={winner} />
            <GameInfo infoGame={infoGame} />
        </MainContainer>
    )
}