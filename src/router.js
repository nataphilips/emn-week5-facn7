const url = require("url");

const home = require("./home");
const handlepublic = require("./handlepublic");
const movie = require("./movie");
const notFound = require("./notfound.js");
// const querystring = require("querystring");
// const fs = require("fs");
// const path = require("path");
const requestModule = require("./fetch.js");

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);

  if (endpoint === "/") {
    return home(req, res);
  } else if (endpoint === "/movie") {
    return;
  } else if (endpoint === "/api/movies/list") {
    return requestModule(req, res);
  } else if (endpoint.indexOf("public") !== -1) {
    handlepublic(req, res);
  } else {
    return notFound(req, res);
  }
};

module.exports = router;
