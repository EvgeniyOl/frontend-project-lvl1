import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const resultOfCalc = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const getRoundData = () => {
  const num1 = getRandomNumber(1, 10); // первое число
  const num2 = getRandomNumber(1, 10); // второе число
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = resultOfCalc(num1, num2, operation).toString();
  return [question, correctAnswer];
};
const startCalcGame = () => startGame(gameRules, getRoundData);

export default startCalcGame;
