import readlineSync from 'readline-sync';

const round = 3;

const startGame = (gameRules, gameCheck) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 1; i <= round; i += 1) {
    const [getQuestion, checkAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== checkAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${checkAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
