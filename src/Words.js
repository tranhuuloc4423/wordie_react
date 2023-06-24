import wordBank from './wordBank.txt'
export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
]

export const generateWordSet = async () => {
    let wordSet
    let todayWord
    await fetch(wordBank)
        .then((res) => res.text())
        .then((data) => {
            const wordArr = data.split('\r\n')
            todayWord = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr)
        })

    return { wordSet, todayWord }
}
