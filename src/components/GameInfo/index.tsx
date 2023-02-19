import { useContext, useEffect, useState } from "react"
import { InfoContainer, TimesWinner } from "./styles"
import { GameContext } from "../../contexts/GameContext"

// interface GameInfoProps {
//     infoGame: {
//         playerOne: number,
//         ties: number,
//         playerTwo: number
//     }
// }

export const GameInfo = () => {

    const { winner, tie} = useContext(GameContext)
    const [infoGame, setInfoGame] = useState({
        playerOne: 0,
        ties: 0,
        playerTwo: 0
    })

    useEffect(() => {
        if (winner) {
            if (winner == "X") {
                setInfoGame({
                    playerOne: infoGame.playerOne + 1,
                    ties: infoGame.ties,
                    playerTwo: infoGame.playerTwo
                })
            } else {
                setInfoGame({
                    playerOne: infoGame.playerOne,
                    ties: infoGame.ties,
                    playerTwo: infoGame.playerTwo + 1
                })
            }
        }
    }, [winner])

    useEffect(() => {
        if (tie) {
            setInfoGame({
                playerOne: infoGame.playerOne,
                ties: infoGame.ties + 1,
                playerTwo: infoGame.playerTwo
            })
        }
    }, [tie])

    return (
        <InfoContainer>
            <TimesWinner winnerValue="playerOne">
                <div>X (Player1)</div>
                <div>{infoGame.playerOne}</div>
            </TimesWinner>
            <TimesWinner winnerValue="ties">
                <div>Ties</div>
                <div>{infoGame.ties}</div>
            </TimesWinner>
            <TimesWinner winnerValue="playerTwo">
                <div>O (Player2)</div>
                <div>{infoGame.playerTwo}</div>
            </TimesWinner>
        </InfoContainer>
    )
}