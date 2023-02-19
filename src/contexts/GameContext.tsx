import { ReactNode, createContext, useState } from "react";

interface GameContextType{
    xIsNext: boolean,
    squares: Array<string | null>,
    winner: string | null,
    tie: boolean,
    resetGame: () => void,
    moveOnGame: (index: number) => void,
}

interface GameContextProviderProps{
    children: ReactNode
}


export const GameContext = createContext({} as GameContextType)

export const GameContextProvider = ({children}:GameContextProviderProps) =>{

    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array<string | null>(9).fill(null))

    const moveOnGame = (index: number) =>{
        const nextSquare = squares.slice()
        if (xIsNext) {
            nextSquare[index] = "X"
        } else {
            nextSquare[index] = "O"
        }
        setSquares(nextSquare)
        setXIsNext(!xIsNext)
    }
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
        return squares.every((square: string | null) => !winner && square !== null)
    }
    const resetGame = () =>{
        setSquares(Array<string | null>(9).fill(null))
        setXIsNext(true)
    }

    const winner = defineWinner(squares)
    const tie = checkTie(squares)

    return(
        <GameContext.Provider value={{xIsNext, moveOnGame, squares, resetGame, tie, winner}}>
            {children}
        </GameContext.Provider>
    )
}

