const express = require("express"),
  PORT = 5000,
  app = express();

const cors = require("cors");
app.use(cors());

app.get("/api/time", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.listen(PORT, () => console.log(`app is listening on port : ${PORT} `));
