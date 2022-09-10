const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5050, () => {
    console.log("Sever is up on 5050 GOD!!")
})

