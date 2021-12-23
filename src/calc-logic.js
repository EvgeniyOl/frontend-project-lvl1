import getRandomNumber from './randomnum.js';
import startGame from './index.js'

const gameRules = 'What is the result of the expression?'; //правила игры

const gameCheck = () => {
   const num1 = getRandomNumber(1, 10); //первое число
   const num2 = getRandomNumber(1, 10); //второе число
   const randomOperator = ['+', '-', '*']; //список операторов
   const ranOpIndex = Math.floor(Math.random() * 3); //рандомный индекс
   const operator = randomOperator[ranOpIndex]; //случайный оператор
   let result;
   switch(ranOpIndex) {
   case 0: result = num1 + num2; break;
   case 1: result = num1 - num2; break;
   case 2: result = num1 * num2; break;
   };
   const question = `${num1} ${operator} ${num2}`;
   const checkAnswer = `${result}`; 
   return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;