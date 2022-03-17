const request = require('request');
let breedName = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) throw error;

  if (body === "[]") {
    console.log("Breed was not found");
    return;
  }

  const data = JSON.parse(body);
  console.log(data[0].description);
});