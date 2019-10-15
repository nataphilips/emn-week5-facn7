const http = require("http");
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 5000;
const router = require("./router");

http.createServer(router).listen(port, hostname, () => {
  console.log(`server running at port http://${hostname}:${port}`);
});
