const getRandomInclusive = require('../helpers/getRandomInclusive');

function giveRandomNumber(agent) {

    let minNum = 1;
    let maxNum = 1000;

    let agentMinNum = agent.parameters['minNum'];
    let agentMaxNum = agent.parameters['maxNum'];

    if (agentMinNum) {
      minNum = agentMinNum;
    }

    if (agentMaxNum) {
      maxNum = agentMaxNum;
    }

    let rand = getRandomInclusive(minNum, maxNum);

    agent.add(`Here you go! ${rand}`);
  }

module.exports = giveRandomNumber;
