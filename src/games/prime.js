import { ranNum } from '../random.js'
import gameLogic, { roundsNum } from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const prime = (n) => {
    if (n===1)  {
        return false;
      }
      else if(n === 2)  {
        return true;
      } else   {
        for(var x = 2; x < n; x+=1)  {
          if(n % x === 0) {
            return false;
          }
        }
        return true;  
      }
    }

const game = () => {
    const question = ranNum(0,100)
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