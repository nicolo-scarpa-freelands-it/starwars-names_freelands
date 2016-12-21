var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json'); // This will create a JavaScript object

var getRandomItem = uniqueRandomArray(starWarsNames);

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

// This is the object that will be exported when people require our module
module.exports = {
  all: starWarsNames,
  random: random
};
