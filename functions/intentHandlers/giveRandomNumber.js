const getRandomInclusive = require('../helpers/getRandomInclusive');

function giveRandomNumber(agent) {

    let minNum = 1;
    let maxNum = 1000;

    let userMin = agent.parameters['minNum'];
    let userMax = agent.parameters['maxNum'];

    if (userMin !== undefined) {
      minNum = userMin;
    }

    if (userMaxuserMin !== undefined) {
      maxNum = userMax;
    }

    let rand = getRandomInclusive(minNum, maxNum);

    agent.add(`Here you go! ${rand}`);
  }

module.exports = giveRandomNumber;
