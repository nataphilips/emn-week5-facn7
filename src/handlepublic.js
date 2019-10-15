const fs = require("fs");
const path = require("path");
const url = require("url");

module.exports = (req, res) => {
  const endpoint = req.url;
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = __dirname + "/.." + endpoint;
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 file not found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
};
