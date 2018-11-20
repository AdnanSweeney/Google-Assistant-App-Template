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

    let rand = getRandomInt(minNum, maxNum);

    agent.add(`Here you go! Your random number is ${rand}`);
  }

module.exports = giveRandomNumber;
