import { ranNum } from '../random.js'
import gameLogic, { roundsNum }from '../index.js'

const description = 'What is the result of the expression?';

const ranOp = () => {
    const operators = ['+', '-', '*'];
    const randOperatorIndex = ranNum(0, operators.length);
    return operators[randOperatorIndex];
  };

const actions = (op1, op2, operation) => {
    op1 = ranNum(0,100)
    op2 = ranNum(0,100)
    operation = ranOp()
    const question = `${op1} ${operation} ${op2}`
    if (operation === '+') {
        const answer = String(op1 + op2)
        return [question,answer]
    } else if (operation === '*') {
        const answer = String(op1 * op2)
        return [question,answer]
    } else if (operation === '-') {
        const answer = String(op1 - op2)
        return [question,answer]
    } else {
        return Error
    }
}
const gamecalc = () => {
    const rounds = []
    for (let i = 0; i < roundsNum; i += 1) {
        rounds[i] = actions()
    }
    return gameLogic(rounds, description)
}

export default gamecalc