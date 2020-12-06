const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const db = require("./db/connection");

const PORT = process.env.PORT || 5000;

const apiRouter = require("./routes/api");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);

const server = http.createServer(app);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("connection established to db");
    server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
