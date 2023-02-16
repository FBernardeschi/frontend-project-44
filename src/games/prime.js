import { ranNum } from '../random.js'
import gameLogic, { roundsNum } from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const prime = (n) => {
    if (n > 1) {
        for (let i = 2; i < n; i++) {
          if (n % i == 0) {
            return false;
          }
        }
        return true;
      } else {
        return false 
      }
    }
    

const game = () => {
    const question = ranNum(0,10)
    const answer = prime(question) === true ? 'yes' : 'no';
    return [question,answer]
}

const primegame = () => {
    const rounds = []
    for (let i = 0; i < roundsNum; i += 1) {
        rounds[i] = game()
    }
    return gameLogic(rounds, description)
}
export default primegame