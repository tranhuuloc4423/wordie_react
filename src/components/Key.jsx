import React, { useContext } from 'react'
import { wordieContext } from '../App'

const Key = ({ keyVal }) => {
    const { onSelectLetter, onEnter, onDelete } = useContext(wordieContext)
    const selectLettet = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === 'BACK') {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }
    return (
        <div
            className={keyVal === 'ENTER' || keyVal === 'BACK' ? `key big` : `key`}
            onClick={selectLettet}
        >
            {keyVal}
        </div>
    )
}

export default Key
