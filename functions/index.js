// This is the entry point of our webhook
// We receive a payload from DialogFlow and send a response back

'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

// Import functions to handle DialogFlow intents
const welcome = require('./intentHandlers/welcome');
const fallback = require('./intentHandlers/fallback');
const giveRandomNumber = require('./intentHandlers/giveRandomNumber');
const repeat = require('./intentHandlers/repeat');
const help = require('./intentHandlers/help');

// enables lib debugging statements
process.env.DEBUG = 'dialogflow:debug';



exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {

  // We use the DialogFlow Fulfillment Library to make receiving and sending responses easier
  const agent = new WebhookClient({ request, response });

  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  // Map our intent handlers to DialogFlow intents
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('GiveRandomNumber', giveRandomNumber);
  intentMap.set('Repeat', repeat);
  intentMap.set('Help', help);

  // Parse received JSON payload for DialogFlow intent, execute corresponding handler, send response back
  agent.handleRequest(intentMap);
  
});
