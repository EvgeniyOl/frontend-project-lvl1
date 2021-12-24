import getRandomNumber from './randomnum.js';
import startGame from './index.js';
import gcd from './NODNumbers.js';

const gameRules = 'Find the greatest common divisor of given numbers.'; //правила игры

const gameCheck = () => {
   const num1 = getRandomNumber(1, 100); //первое число
   const num2 = getRandomNumber(1, 100); //второе число
   const result = gcd(num1, num2);
   const question = `${num1} ${num2}`;
   const checkAnswer = `${result}`; 
   return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;