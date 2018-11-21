const setLastEmitContext = require("../helpers/setLastEmitContext");

// Repeat intent to repeat last said response
function repeat(agent) {

    let lastEmitContext = agent.getContext("last-emit-context")
    let response = "Sorry, I didn't save that last response."
    
    if (lastEmitContext) {

        response = lastEmitContext.parameters.lastEmit;
    } 

    setLastEmitContext(agent, response);
    
    agent.add(response);
}

module.exports = repeat;