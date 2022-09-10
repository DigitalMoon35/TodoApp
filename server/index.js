const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js")

//middleware
app.use(cors());
app.use(express.json());

app.listen(5050, () => {
    console.log("Sever is up on 5050 GOD!!")
})

