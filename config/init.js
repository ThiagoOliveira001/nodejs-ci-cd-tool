const cors = require("cors");
const express = require("express");
const { httpResponse } = require("../src/api/middlewares/index");

module.exports = () => {
  app = express();
  _appUse();
  _setRoutes();
};

function _appUse() {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ limit: "50mb" }));
  app.use(cors());
  app.use(httpResponse);
}

function _setRoutes() {
  require("../src/api/routes/ping")();
}
