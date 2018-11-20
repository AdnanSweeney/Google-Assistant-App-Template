const getRandomInclusive = require('../helpers/getRandomInclusive');

function giveRandomNumber(agent) {

    let minNum = 1;

    let userMin = agent.parameters['minNum'];
    let userMax = agent.parameters['maxNum'];

    if (userMin !== "") {
      minNum = userMin;
    }

    let maxNum = minNum + 1000;

    if (userMax !== "") {
      maxNum = userMax;
    }

    let rand = getRandomInclusive(minNum, maxNum);

    agent.add(`Here you go! user min is ${userMin} Min num is ${minNum} and max is ${maxNum}. Your random number is ${rand}`);
  }

module.exports = giveRandomNumber;
