import { ranNum } from '../random.js'
import gameLogic, { roundsNum } from '../index.js'

const description = 'What number is missing in the progression?'
const length = 10

const gameprogression = () => {
    const step = ranNum(0,10)
    const start = ranNum(0,100)
    const progression = []
    for (let i = 0; i <= length; i += 1) {
        progression.push(start + step * i)
    }
    let answer = String(progression.splice(ranNum(1, length), 1, '..'))
    const question = String(progression.join(' '))
    return [question,answer]
}
 const progressiongame = () => {
    const rounds = []
    for (let i = 0; i < roundsNum; i += 1) {
        rounds[i] = gameprogression()
    }
    return gameLogic(rounds, description)
}
export default progressiongame
