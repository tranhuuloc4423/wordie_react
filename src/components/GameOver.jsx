import React, { useContext } from 'react'
import { wordieContext } from '../App'

const GameOver = () => {
    const { gameOver, pos, correctWord } = useContext(wordieContext)
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? 'You Correctly Guessed' : 'Unlucky You'}</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameOver.guessedWord && <h3>You guessed in {pos.posY} attempts</h3>}
        </div>
    )
}

export default GameOver
