import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const Operator = ['+', '-', '*'];
  return Operator[Math.floor(Math.random() * Operator.length)];
};
function resultOfCalc(number1, number2, operator) {
  let result = 0;
  if (operator === '+') {
    result = number1 + number2;
  } else if (operator === '-') {
    result = number1 - number2;
  } else {
    result = number1 * number2;
  }
  return result;
}

const gameCheck = () => {
  const num1 = getRandomNumber(1, 10); // первое число
  const num2 = getRandomNumber(1, 10); // второе число
  const randomOperator = getRandomOperator();
  const question = `${num1} ${randomOperator} ${num2}`;
  const calcResult = resultOfCalc(num1, num2, randomOperator);
  const checkAnswer = `${calcResult}`;
  return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;
