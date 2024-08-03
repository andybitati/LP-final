const express = require("express");
const app = express.Router();

//Les middleware qui permettent la compréhension de certaines extensions de code

app.use(express.json());
app.use(express.urlencoded({extended : false}));