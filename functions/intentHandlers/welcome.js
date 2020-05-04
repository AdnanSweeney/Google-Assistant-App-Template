const setLastEmitContext = require("../helpers/setLastEmitContext");
const { getRandomElement } = require('../helpers/getRandom');

// Welcome intent to introduce functionality of the app
function welcome(agent) {

  let welcomes = [
    "Welcome to the app, ask me to tell you a random number!",
    "Hi there, ask me for a random number",
    "Ask for a random number!",
    "I can give you a random number. What number range are you interested in?"
  ];
  
  // Randomize given response
  let response = getRandomElement(welcomes);

  console.log("outside fulifillment file!");
    

  setLastEmitContext(agent, response);
  agent.add(response);
}

module.exports = welcome;
