import React, { useState } from "react"
import { SquareButton, TurnPlayer } from "./styles"

interface SquareProps{
    value: string | null;
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Square = ({value, onSquareClick}: SquareProps) =>{
    return(
        <SquareButton onClick={onSquareClick}>
            {value === "O" && <TurnPlayer turnPlayer="O">{value}</TurnPlayer>}
            {value === "X" && <TurnPlayer turnPlayer="X">{value}</TurnPlayer>}
        </SquareButton>
    )
}