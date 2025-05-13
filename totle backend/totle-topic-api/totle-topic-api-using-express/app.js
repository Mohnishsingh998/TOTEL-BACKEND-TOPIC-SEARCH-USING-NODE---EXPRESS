const express = require("express");

const app = express();
const router = require("./routes/topicRoutes");

const port = 3000;

app.use("/api/topics", router);

app.listen(port, () => {
  console.log(`server is runnig at  http://localhost:${port}`);
});
