import getRandomNumber from './randomnum.js';
import startGame from './index.js'

const gameEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".'; //правила игры

const evenNumber = (num) => num % 2 === 0; //проверка числа на кратность

const gameCheck = () => {
   const num = getRandomNumber(1, 5000);
   const question = `${num}`;
   const checkAnswer = evenNumber(num) ? 'yes' : 'no'; //оно кратное? присваивается yes или no
   return [question, checkAnswer];
};
const pusk = () => startGame(gameEvenRules, gameCheck);

export default pusk;