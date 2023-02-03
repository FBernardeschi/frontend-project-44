import readlineSync from 'readline-sync';
import userName from './cli.js';

console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

const game1 = () => {
  for (let i = 0; i <= 4; i += 1) {
    const ranNum = Math.floor(Math.random() * 100);
    const tryGame = readlineSync.question(`${'Question: '}${ranNum}${'\nYour answer: '}`);
    if ((ranNum % 2 === 0 && tryGame === 'yes') || (ranNum % 2 !== 0 && tryGame === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (ranNum % 2 === 0 && tryGame !== 'yes') {
      console.log(`${tryGame} is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    } else if (ranNum % 2 !== 0 && tryGame !== 'no') {
      console.log(`${tryGame} is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default game1;
