import express from "express";
import os from "os";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello, World! I am Pod ${os.hostname()} Version 1.2.0`);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
