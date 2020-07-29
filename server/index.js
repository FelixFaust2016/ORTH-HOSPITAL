require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const db = require("./models");
const handle = require("./handlers");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => res.json({ hello: "hello world" }));
app.use("/api/auth", routes.auth);
app.use("/api/doctors", routes.doctors);
app.use("/api/category", routes.category);
app.use("/api/appointment", routes.appointment)
app.use("/api/quotes", routes.quotes)
app.use("/api/reviews", routes.review)

app.use(handle.notFound);
app.use(handle.errorHandler);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

app.listen(port, console.log(`Server is running on port ${port}`));
