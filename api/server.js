const express = require("express");
const recipesRouter = require("./recipes/recipes-router");
const helmet = require('helmet')
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipesRouter);
server.use("*", (req, res)=> {
    res.json({api: "API is up and running"});
});

module.exports = server