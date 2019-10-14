const url = require('url');
const home = require('./home');
const movie = require('./movie');
const notFound = require('./notfound.js');


const router = ((request, response) => {
    // basic route logger
  console.log(`${request.method} ${request.url}`);
  
  // grab pathname 
  const { pathname } = url.parse(request.url);
  
  // router
  switch(pathname){
    case `/`:
      return home(request, response);

    case `/movie`:
      return movie(request,response);

    default:
      return notFound(request, response);
    }
})

module.exports = router;