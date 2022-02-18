const express = require("express");
const app = express();
const cors = require("cors")
const test = require("./Router/test");

app.use(cors());

app.use("/api", test);

const port = 5000;
app.listen(port,()=> console.log({port}));