const request = require('request');
const userInput = process.argv[2].toLowerCase().slice(0, 3);
request("https://api.thecatapi.com/v1/breeds/search?q=" + userInput, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('error: ', error);
  } else if (data[0] === undefined) {
    console.log("Invalid breed type");
  } else {
    console.log(data[0].description);
  }
});
  