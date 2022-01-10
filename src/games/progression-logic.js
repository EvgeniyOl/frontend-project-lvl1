import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const gameRules = 'What number is missing in the progression?';
const progressionLength = 10;

const createProgression = (firstNumber, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};
const getRoundData = () => {
  const step = getRandomNumber(1, 5);
  const firstNumber = getRandomNumber(1, 10);
  const progression = createProgression(firstNumber, step, progressionLength);
  const randomNumber = getRandomNumber(0, progression.length - 1);
  const result = progression[randomNumber]
  progression[randomNumber] = '..';
  const question = progression.join(' ');
  const correctAnswer = `${result}`;
  return [question, correctAnswer];
};
const startProgressionGame = () => startGame(gameRules, getRoundData);

export default startProgressionGame;
