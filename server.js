const express = require("express");
const bodyParser = require("body-parser");
const paymentMethod = require("./routes/payment")

var app = express();
app.use(bodyParser.json());

app.use("/payment",paymentMethod);
app.listen(3001)
console.log("listning")