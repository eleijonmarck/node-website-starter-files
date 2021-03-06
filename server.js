const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
