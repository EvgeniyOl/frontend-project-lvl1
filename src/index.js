import readlineSync from 'readline-sync';

const numberOfRound = 3;

const startGame = (gameRules, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 1; i <= numberOfRound; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
