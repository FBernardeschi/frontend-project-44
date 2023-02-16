import ranNum from '../random.js';
import gameLogic, { roundsNum } from '../index.js';

const description = 'What is the result of the expression?';

const ranOp = () => {
  const operators = ['+', '-', '*'];
  const randOperatorIndex = ranNum(0, operators.length);
  return operators[randOperatorIndex];
};

const action = (op1, op2, operation) => { switch (operation) {
    case '+': 
        return op1 + op2;
    case '*':
        return op1 * op2;
    case '-':
        return op1 - op2;
    default:
        return Error;
    }
}

const actions = () => {
    const op1 = ranNum(0, 100);
    const op2 = ranNum(0, 100);
    const operation = ranOp();
    const question = `${op1} ${operation} ${op2}`;
    const answer = String(action(op1, op2, operation));
    return [question, answer];
}
const gamecalc = () => {
  const rounds = [];
  for (let i = 0; i < roundsNum; i += 1) {
    rounds[i] = actions();
  }
  return gameLogic(rounds, description);
};

export default gamecalc;
