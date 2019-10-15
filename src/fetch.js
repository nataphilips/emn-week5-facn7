const requester = require("request");
const qs = require("querystring");
const http = require("http");

const requestModule = (request, response) => {
  const urlAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=6357c2313d5fd7a4065df2466b895a84&language=en-US&page=`;
  let results = [];

  for (let i = 1; i <= 5; i++) {
    requester.get(urlAPI + i, (err, res, body) => {
      const { statusCode, headers } = res;
      const contentType = headers["content-type"];
      if (err || statusCode !== 200) {
        console.log(`Error ${err}`);
        console.log(`Status Code: ${statusCode}`);
        console.log(`Content Type: ${contentType}`);
        response.writeHead(500, { "content-type": "text/plain" });
        response.end("Sorry, there was a server error");
        return;
      }
      results = results.concat(JSON.parse(body).results);
    });
  }

  setTimeout(function() {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(results));
  }, 2000);
};

module.exports = requestModule;
