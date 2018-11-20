## Table of Contents

- [Overview](#overview)
    - [Actions on Google](#actions-on-google)
    - [DialogFlow](#dialogflow)
    - [Firebase](#firebase)
- [Step by Step Setup](#step-by-step-setup)
    - [Environment](#environment)
    - [Your First Agent](#your-first-agent)
    - [Webhook Initialization](#webhook-initialization)
    - [Local Testing](#local-testing)
- [Useful Resources](#useful-resources)

## Overview

This is a sample project to get started building your own DialogFlow app for the Google Assistant

The Google Assistant supports other "agents" to have a conversation with you, and that agent is what we are going to be building here. DialogFlow is used to translate user input into a response that we relay back to the user, and again listen for their following input. 

To start, we can say _OK Google, talk to Numbo Jumbo_. Google Assistant then hands off control to our DialogFlow chatbot. This transition of control from the Google Assistant to our DialogFlow agent is called an ACTION. Actions are just keywords that invoke our app. 

Our chatbot will listen to user input, convert the speech to text, and compare against different keywords to trigger INTENTS, where we specify the chatbot's behaviour. 

We can specify basic intent behaviour within DialogFlow's front-end, or code more complex responses using FULFILLMENT. We use NodeJS to code our own handlers for DialogFlow intents that are triggered

We can host our NodeJS Fulfillment code on the web using Firebase. Firebase makes the fulfillment code available on the internet, so DialogFlow can call the code by accessing a URL.

We can test locally with firebase as well. After logging in and specifying the right project, we can serve the code locally. By using the `ngrok` package we can make our localhost available on the internet. Because the firebase host is still pointing to our local code, any saved changes will propogate to this internet endpoint. By specifying this endpoint in our DialogFlow webhook code we can see our updates in real time.

### Actions on Google

The Actions on Google platform is just a wrapper that we need in order to enable the DialogFlow agent on  the Google Assistant. All that needs to be done is specifying an invocation name _action_ that will trigger our DialogFlow agent (_Talk to Numbo Jumbo_). We can have multiple _actions_ per agent, so that we can trigger intents and invoke our DialogFlow agent with one phrase i.e. _OK Google, ask Numbo Jumbo for a random number_. Actions on Google connects _intent utterances_ and our invocation name _action_ with connecting words like "for", "about", "ask", or "talk to."

Our Actions on Google project will have a _project ID_ that we need to use when linking our webhook code to firebase, as well as linking our DialogFlow agent to our Actions on Google project.  

### DialogFlow

The DialogFlow platform is what we use to create conversations. We specify trigger statements or _utterances_ that will trigger different _intents_. These _intents_ define how our agent acts when receiving certain input. i.e. When the user says something along the lines of _Give me a random number_, the GiveRandomNumber _intent_ is triggered, our logic executes, and we send a response to the user.

Intents can have parameters, which can be required or optional. These parameters should be included in the sample _utterances_ for the intent. Parameters are useful for crafting dynamic responses and providing useful information based on input to the user i.e. _OK Google, ask Numbo Jumbo for a random number between **500** and **600**_ has two parameters that we read and use to customize our response.

Entities are simply types of parameters like date, city, or name. DialogFlow already has a bunch of them generated that we can use. We can also create our own entities (enums) that can be used as parameters for different _intents_. i.e. We can create a dogBreed entity that has possible values of labrador, chihuahua, German shephard, or husky.

The fulfillment tab is used when we want to customize the response sent back to the user for more complex interactions. We specify a URL to our endpoint (on firebase) that will receive JSON requests sent from user input. Responses will be crafted from this endpoint logic and sent back to DialogFlow, dictating how the agent will respond to the user.

DialogFlow is essentially the front-end for the agent, defining what _utterances_ to listen for and parameters to collect. The actual response logic is normally defined in our endpoint code.

We can import and export the agent's front-end files to copy intents and utterances over to other agents.

### Firebase

Firebase is the hosting platform that we deploy our fulfillment code to. Firebase functions is just a way to host our logic on the internet in an easy, secure way. 

Using the Firebase Command Line Interface (CLI) we can specify the project that we are deploying to using `firebase use <project-id>`. When we're in the functions folder of our project we can use `firebase deploy` to push our functions to our online firebase project. On the [firebase web console](console.firebase.com) we can now copy the URL for our endpoint and use it as our webhook endpoint address. Once the deployment has finished our new endpoint logic can be seen when testing our agent.

We can test our agent locally using firebase functions as well. By using the command `firebase serve --only functions` we host our endpoint on `localhost:5000` appended with a firebase project path. If we send requests in the right format to our localhost, we can see the responses our endpoint would send to our DialogFlow agent on port 5000. 

We can use the `ngrok` package to push our locally hosted endpoint to the internet using a randomly generated ngrok URL. Appending our firebase project path to the ngrok generated URL will have the same effect has serving with firebase, only our host is now accessible over the web. This means that this URL can be used as a webhook fulfillment URL in DialogFlow, and our local changes will propogate to our agent when testing.

## Step by Step Setup

Hi there, there will be a bunch of other steps here

### Environment

lol

### Your First Agent

hi

### Webhook Initialization

here it is

### Local Testing

lika dis

## Useful Resources

- DialogFlow Documentation: https://dialogflow.com/docs
- Google Actions Documentation: https://developers.google.com/actions/dialogflow/
- Codelabs Project: _(RECOMMENDED)_ https://codelabs.developers.google.com/codelabs/actions-1/

## MD File features

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
- `create-react-app` is a global command-line utility that you use to create new projects.

Here's a link [within](#step-by-step-setup) a line that goes to Step by Step setup
Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.


```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:
Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).
### `npm run eject`
### Supported Language Features
# What is this?
recommend to _fork_