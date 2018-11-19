const getRandomInclusive = require('../helpers/getRandomInclusive');

function welcome(agent) {

  let welcomes = [
    "Welcome to the app, ask me to tell you a random number!",
    "Hi there, ask me for a random number",
    "Ask for a random number!",
    "I can give you a random number. What number range are you interested in?"
  ];
  
  let response = welcomes[getRandomInclusive(0, 3)];

  agent.add(response);
}

module.exports = welcome;
