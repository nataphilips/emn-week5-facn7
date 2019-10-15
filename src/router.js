const url = require("url");
const home = require("./home.js");
const movie = require("./movie.js");
const notFound = require("./notfound.js");

const router = (request, response) => {
  // basic route logger
  console.log(`${request.method} ${request.url}`);

  // grab pathname
  const { pathname } = url.parse(request.url);

  // router
  if (pathname == "/") {
    return home.home(request, response);
  } else if (pathname == "/movie") {
    return movie(request, response);
  } else if (pathname.indexOf("public") !== -1) {
    home.handlePublic(request, response, url);
  } else {
    return notFound(request, response);
  }
};

module.exports = router;
