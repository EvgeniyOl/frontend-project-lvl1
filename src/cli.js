import readlineSync from "readline-sync";
const userName = () => {
const name = readlineSync.question('What is your name?: ');
console.log("Hello, " + name + "!");
};
export default userName;