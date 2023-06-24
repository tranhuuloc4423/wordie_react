import Heading from './components/Heading'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { createContext, useEffect, useState } from 'react'
import './App.css'
import { boardDefault, generateWordSet } from './Words'
import GameOver from './components/GameOver'

export const wordieContext = createContext()

function App() {
    // state
    const [board, setBoard] = useState(boardDefault)
    const [pos, setPos] = useState({
        posX: 0,
        posY: 0,
    })
    const [correctWord, setCorrectWord] = useState('')
    const [wordList, setWordList] = useState(new Set())
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    })

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordList(words.wordSet)
            setCorrectWord(words.todayWord.toUpperCase())
        })
    }, [])
    const { posX, posY } = pos

    const onSelectLetter = (key) => {
        if (posX > 4) return
        const newBoard = [...board]
        newBoard[posY][posX] = key
        setBoard(newBoard)
        setPos({ ...pos, posX: posX + 1 })
    }

    const onDelete = () => {
        if (posX === 0) return
        const newBoard = [...board]
        newBoard[posY][posX - 1] = ''
        setBoard(newBoard)
        setPos({ ...pos, posX: posX - 1 })
    }

    const onEnter = () => {
        console.log(correctWord)
        if (posX !== 5) return
        let currWord = ''
        for (let i = 0; i < 5; i++) {
            currWord += board[posY][i]
        }

        if (wordList.has(currWord.toLowerCase())) {
            setPos({ posY: posY + 1, posX: 0 })
        } else {
            alert('Word Not Found')
        }

        if (currWord === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true })
            return
        }
        if (posY === 5) {
            setGameOver({ gameOver: true, guessedWord: false })
        }
    }

    return (
        <div className="App">
            <Heading />
            <wordieContext.Provider
                value={{
                    board,
                    setBoard,
                    pos,
                    setPos,
                    onSelectLetter,
                    onEnter,
                    onDelete,
                    correctWord,
                    gameOver,
                    setGameOver,
                }}
            >
                <Board />
                {gameOver.gameOver ? <GameOver /> : <Keyboard />}
            </wordieContext.Provider>
        </div>
    )
}

export default App
