const http = require("http");
const hostname = process.env.HOST_NAME || "localhost";
const port = process.env.PORT || 3000;
const router = require("./router");

http.createServer(router).listen(port, () => {
  console.log(`server running at port http://${hostname}:${port}`);
});
