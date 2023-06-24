import { useState, createContext } from 'react'

import { boardDefault } from '../Words'
import Letter from './Letter'
const Board = () => {
    const [board, setBoard] = useState(boardDefault)
    return (
        <div className="board">
            {board.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((letter, idx) => {
                        return <Letter posX={idx} posY={index} key={idx} />
                    })}
                </div>
            ))}
        </div>
    )
}

export default Board
