import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const num = getRandomNumber(1, 50);
  const question = `${num}`;
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startEvenGame = () => startGame(gameRules, getRoundData);

export default startEvenGame;
