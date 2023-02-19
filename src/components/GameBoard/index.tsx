import { BoardContainer } from "./styles"
import { Square } from "./Square"
import { useState } from "react"


interface GameBoardProps{
    squares: Array<string | null>,
    winner: string | null,
    xIsNext: boolean,
    setSquares: (e: Array<string | null>) => void,
    setXIsNext: (e: boolean) => void,
}

export const GameBoard = ({squares, setSquares, xIsNext, setXIsNext, winner}:GameBoardProps) => {
    const handleClick = (index: number) => {
        if (squares[index] || winner) {
            return
        }
        const nextSquare = squares.slice()
        if (xIsNext) {
            nextSquare[index] = "X"
        } else {
            nextSquare[index] = "O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }

    return (
        <BoardContainer>
            <div>
                <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
                <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
                <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
                <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
                <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
            </div>
            <div>
                <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
                <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
                <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
            </div>
        </BoardContainer>
    )
}