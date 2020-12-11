const venom = require('venom-bot');

const greet = require('./source/greet');
const symptoms = require('./source/covidSymptoms');
const care = require('./source/covidCare');

venom.create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage(message => {
    const { body, isGroupMsg, from } = message;
    if (isGroupMsg) return;

    if (body === "1") {
      return symptoms(client, from);
    } else if (body === "2") {
      return care(client, from);
    } else if (body === "3") {

    } else {
      return greet(client, from);
    }
  })
}