import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 > num1) return gcd(num2, num1);
  if (!num2) return num1;
  return gcd(num2, num1 % num2);
};
const getRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};
const startGcdGame = () => startGame(gameRules, getRoundData);

export default startGcdGame;
