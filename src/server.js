const http = require("http");
require("dotenv").config();

const { connectMongo } = require("./services/mongo");

const config = {
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
};

const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

async function startServer() {
  await connectMongo(process.env.CONNECTION_URL);
  server.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

startServer();
