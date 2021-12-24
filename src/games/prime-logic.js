import getRandomNumber from '../randomnum.js';
import startGame from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // правила игры

function isPrimeNumber(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
const gameCheck = () => {
  const num = getRandomNumber(1, 50);
  const question = `${num}`;
  const checkAnswer = isPrimeNumber(num) ? 'yes' : 'no'; // оно простое? присваивается yes или no
  return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;
