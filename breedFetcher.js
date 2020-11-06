const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (!data[0]) {
      callback(`Breed ${breedName} not found.`, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };