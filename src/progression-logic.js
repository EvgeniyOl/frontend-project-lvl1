import getRandomNumber from './randomnum.js';
import startGame from './index.js';

const gameRules = 'What number is missing in the progression?'; // правила игры
const progrLength = 10; // длина прогрессии

const createProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};
const gameCheck = () => {
  const step = getRandomNumber(1, 5); // шаг чисел
  const firstNumber = getRandomNumber(1, 10); // первое число прогрессии
  const progression = createProgression(firstNumber, step, progrLength);
  const randomNumber = getRandomNumber(0, progression.length - 1); // номер случайного числа
  const result = progression[randomNumber];
  progression[randomNumber] = '...'; // замена случайного числа в прогрессии
  const question = progression;
  const checkAnswer = `${result}`;
  return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;
