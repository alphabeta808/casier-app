const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Port = 5000;
const Route = require("./Routes/route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// middleware
app.use(cors({ credentials: true, origin: "http://localhost:3001" }));
app.use(express.json());
app.use("/", Route);

app.listen(Port, () => {
  console.log(`server running at ${Port}`);
});
