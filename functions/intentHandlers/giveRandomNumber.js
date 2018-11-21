const setLastEmitContext = require("../helpers/setLastEmitContext");
const { getRandomInt } = require('../helpers/getRandom');

function giveRandomNumber(agent) {

    let minNum = 1;

    // Check if the user has given any parameters
    let userMin = agent.parameters['minNum'];
    let userMax = agent.parameters['maxNum'];

    // If min was given update minNum
    minNum = (userMin !== "" ? userMin : minNum);

    let maxNum = minNum + 1000;

    // If max was given update maxNum
    maxNum = (userMax !== "" ? userMax : maxNum);

    // if max under min, update min
    minNum = (minNum > maxNum ? maxNum - 1000 : minNum);

    let rand = getRandomInt(minNum, maxNum);

    let response = [`Here you go! Your random number is ${rand}`, "Ask for another one!"];

    setLastEmitContext(agent, response);
    agent.add(response);
  }

module.exports = giveRandomNumber;
