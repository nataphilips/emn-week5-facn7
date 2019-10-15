const url = require("url");
const home = require("./home");
const handlepublic = require("./handlepublic");
const movie = require("./movie");
const notFound = require("./notfound.js");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");
const requestModule = require("./fetch.js");

const router = (req, res) => {
  const endpoint = req.url;

  switch (endpoint) {
    case "/": {
      return home(req, res);
    }

    case "/movie": {
      return;
    }

    case "/api/movies/list": {
      return requestModule(req, res);
    }

    default: {
      return handlepublic(req, res);
    }
  }
};

module.exports = router;
