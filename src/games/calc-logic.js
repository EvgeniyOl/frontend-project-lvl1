import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const statement = ['+', '-', '*'];
  return statement[getRandomNumber(0, 2)];
};
const resultOfCalc = (number1, number2, randomOperator) => {
  let result = '';
  switch (randomOperator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
  }
  return result;
};
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
