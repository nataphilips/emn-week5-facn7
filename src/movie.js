const fs = require('fs');
const path = require('path');





module.exports = ((request, response) => {
  
    const filePath = path.join(__dirname, '..', 'public', 'movie.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end("<h1>Sorry, we've had a problem on our end</h1>");
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    });



  
  })