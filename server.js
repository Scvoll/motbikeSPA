const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.resolve("./build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./build/index.html"))
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("listening port " + port));