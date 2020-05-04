// Function to set the last-emit-context of an agent to a given phrase
function setLastEmitContext(agent, lastEmit) {

    let lastEmitContext = { 

        "name": 'last-emit-context',
        "lifespan": 4,
        "parameters": { "lastEmit": lastEmit }
    }

    agent.setContext(lastEmitContext);
}

module.exports = setLastEmitContext;