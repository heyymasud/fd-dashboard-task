const express = require("express");
const app = express();
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡listening on localhost:${port}`);
});
