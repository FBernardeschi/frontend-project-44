import { ranNum } from '../random.js'
import gameLogic, { roundsNum } from '../index.js'

const description = 'Find the greatest common divisor of given numbers.';

const nod = (n,m) => {
    if (m !== 0) {
      const k = n % m;
      return nod(m, k);
    }
    return n;
  };

const gcd = () => {
    const x = ranNum(0,100)
    const y = ranNum(0,100)
    const question = `${x} ${y}`
    const answer = String(nod(x,y))
    return[question,answer]

}

const gamegcd = () => {
    const rounds = []
    for (let i = 0; i < roundsNum; i += 1) {
        rounds[i] = gcd()
    }
    return gameLogic(rounds, description)
}

export default gamegcd