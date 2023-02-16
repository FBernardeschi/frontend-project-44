import readlineSync from 'readline-sync';

export const roundsNum = 3;

const gameLogic = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundsNum; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameLogic;
