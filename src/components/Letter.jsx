import React from 'react'
import { useContext } from 'react'
import { wordieContext } from '../App'
const Letter = ({ posX, posY }) => {
    const { board, correctWord, pos } = useContext(wordieContext)
    const letter = board[posY][posX]

    const correct = correctWord[posX] === letter
    const almost = !correct && letter !== '' && correctWord.includes(letter)
    const letterState = pos.posY > posY && (correct ? 'correct' : almost ? 'almost' : 'wrong')

    return <div className={`letter ${letterState}`}>{letter}</div>
}

export default Letter
