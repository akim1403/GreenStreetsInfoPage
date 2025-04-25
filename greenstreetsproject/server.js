const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Define routes, APIs, and middleware here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const dataStorage = [];
app.use(express.json());

app.post("/api/contactmessage", (req, res) => {
  let contactMessage = req.body;
  dataStorage.push(contactMessage);
  console.log(dataStorage);
  res.send("Success");
});
