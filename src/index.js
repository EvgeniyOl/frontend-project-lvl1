import readlineSync from 'readline-sync'; // загружаем библиотеку

const round = 3; // устанавливаем по заданию кол-во раундов

const startGame = (gameRules, gameCheck) => {
  console.log('Welcome to the Brain Games!'); // приветствие
  const name = readlineSync.question('What is your name?: '); // спрашиваем имя и здороваемся
  console.log(`Hello, ${name}!`);
  console.log(gameRules); // правила игры

  for (let i = 1; i <= round; i += 1) { // цикл раундов
    const [getQuestion, checkAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== checkAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${checkAnswer}. Let's try again, ${name}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;
