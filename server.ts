import express from "express";
const path = require("path");

const app = express();
// app.use(express.static("./manyCircles"));

app.get("/", (req : express.Request, res : express.Response) => {
    res.sendFile(path.join(__dirname,'manyCircles','manycircles.html'));

})

app.listen(8000, () => {console.log("listening on port 8k")});