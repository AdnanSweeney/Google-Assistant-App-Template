const setLastEmitContext = require("../helpers/setLastEmitContext");

function help(agent) {

    let response = [`I can give you a random number! You can also ask for a number between 2 bounds if you like. What would you like?`, ];
    
    setLastEmitContext(agent, response);
    agent.add(response);
}

module.exports = help;
