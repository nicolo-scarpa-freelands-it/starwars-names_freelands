var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json'); // This will create a JavaScript object

// This is the object that will be exported when people require our module
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};
