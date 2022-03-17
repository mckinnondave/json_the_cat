const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      return callback(error, null);
    }

    if (body === "[]") {
      return callback("Breed was not found", null);
    }

    const data = JSON.parse(body);
    callback(null, data[0].description);
  });
};


module.exports = { fetchBreedDescription };