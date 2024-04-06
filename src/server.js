const http = require("http");
require("dotenv").config();

const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

function startServer() {
  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

startServer();
