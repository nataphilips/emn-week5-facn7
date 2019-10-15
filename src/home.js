const fs = require("fs");
const path = require("path");

// <<<<<<< HEAD
const home = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      // =======
      // module.exports = (request, response) => {
      //   const filePath = path.join(__dirname, "..", "public", "index.html");
      //   console.log(filePath);
      //   fs.readFile(filePath, (error, file) => {
      //     if (error) {

      // >>>>>>> 4eea6e76881c0c65a7b3425f60b04fa4cffd93f9
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

// const handlePublic = (request, response, url) => {
//   console.log(request.url);

//   const extension = request.url.split(".")[1];
//   const extensionType = {
//     html: "text/html",
//     css: "text/css",
//     js: "application/javascript",
//     ico: "image/x-icon"
//   };

//   const filePath = path.join(__dirname, "..", request.url);

//   fs.readFile(filePath, (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, { "Content-Type": "text/html" });
//       response.end("<h1>404 file not found</h1>");
//     } else {
//       response.writeHead(200, { "Content-Type": extensionType[extension] });
//       response.end(file);
//     }
//   });
//   console.log(url);
// };

module.exports = home;
