import { useCallback, useContext, useEffect } from 'react'
import Key from './Key'
import { wordieContext } from '../App'
const Keyboard = () => {
    const keyboard = ['q w e r t y u i o p', 'a s d f g h j k l', 'enter z x c v b n m back']
    const { onSelectLetter, onEnter, onDelete } = useContext(wordieContext)
    const handleKeyboard = useCallback((e) => {
        if (e.key === 'Enter') {
            onEnter()
        } else if (e.key === 'Backspace') {
            onDelete()
        } else if (e.key >= 'a' && e.key <= 'z') {
            onSelectLetter(e.key.toUpperCase())
        }
    })
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => document.removeEventListener('keydown', handleKeyboard)
    }, [handleKeyboard])
    console.log('render')
    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            {keyboard.map((line, index) => (
                <div className="line" key={index}>
                    {line.split(' ').map((key, idx) => (
                        <Key keyVal={key.toUpperCase()} key={idx} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Keyboard
