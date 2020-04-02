require('dotenv').config();
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express");

const db = require('./models')
const handle = require('./handlers')
const routes = require("./routes")

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => res.json({ hello: "hello world" }));
app.use("/api/auth", routes.auth)

app.use(handle.notFound);
app.use(handle.errorHandler);

app.listen(port, console.log(`Server is running on port ${port}`));
