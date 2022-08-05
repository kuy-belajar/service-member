require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersRouters = require("./routes/users.routes.js");
const refreshTokenRouters = require("./routes/refresh_tokens.routes");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouters);
app.use("/refresh_tokens", refreshTokenRouters);

module.exports = app;
