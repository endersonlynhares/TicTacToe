import {BoardContainer} from "./styles"
import { Square } from "./Square"
import { useState } from "react"
export const GameBoard = () =>{
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const handleClick = (index: number) =>{
        if(squares[index]){
            return
        }
        const nextSquare = squares.slice()
        if(xIsNext){
            nextSquare[index] = "X"
        }else{
            nextSquare[index] = "O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }

    return(
        <BoardContainer>
            <div>
                <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
                <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
                <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
                <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
                <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
                <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
                <Square onSquareClick={() => handleClick(9)} value={squares[9]} />
            </div>
        </BoardContainer>
    )
}