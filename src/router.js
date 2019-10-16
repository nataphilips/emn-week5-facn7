const url = require("url");
const home = require("./home");
const handlepublic = require("./handlepublic");
const movie = require("./movie");
const notFound = require("./notfound.js");
const requestModule = require("./fetch.js");
const fs = require("fs");

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  var method = req.method;
  if (method === "GET") {
    if (endpoint === "/") {
      return home(req, res);
    } else if (endpoint === "/movie") {
      return movie(req, res);
    } else if (endpoint === "/api/movies/list") {
      return requestModule(req, res);
    } else if (endpoint.indexOf("movie") !== -1) {
      return movie(req, res);
    } else if (endpoint.indexOf("public") !== -1) {
      handlepublic(req, res);
    } else {
      return notFound(req, res);
    }
  } else {
    var allTheData = "";
    req.on("data", function(chunkOfData) {
      allTheData += chunkOfData;
    });

    req.on("end", function() {
      console.log(allTheData);
      fs.writeFile(__dirname + "/search.json", allTheData, error => {
        console.log(error);
      });

      res.end();
    });
  }
};

module.exports = router;
