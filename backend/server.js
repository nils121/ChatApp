const express = require("express");
const { get } = require("express/lib/response");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

const chatdata = [
  {
    name: "nilesh121",
  },
  {
    name: "rasika",
  },
];
app.get("/getData", (req, res) => {
  res.send(chatdata);
});

const PORT = process.env.PORT || 50001;

app.listen(PORT, console.log(`Server start on port ${PORT}`));
