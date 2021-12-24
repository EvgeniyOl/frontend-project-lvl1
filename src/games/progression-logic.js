import getRandomNumber from '../randomnum.js';
import startGame from '../index.js';

const gameRules = 'What number is missing in the progression?';
const progrLength = 10;

const createProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};
const gameCheck = () => {
  const step = getRandomNumber(1, 5);
  const firstNumber = getRandomNumber(1, 10);
  const progression = createProgression(firstNumber, step, progrLength);
  const randomNumber = getRandomNumber(0, progression.length - 1);
  const result = progression[randomNumber];
  progression[randomNumber] = '..';
  const question = progression;
  const checkAnswer = `${result}`;
  return [question, checkAnswer];
};
const pusk = () => startGame(gameRules, gameCheck);

export default pusk;
