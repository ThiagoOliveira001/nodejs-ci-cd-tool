const Mongo = require("../src/helpers/mongo");
const { promisify } = require("util");
const { exec } = require("child_process");

let obj = {
  settings: {},
  init: async () => {
    require("dotenv").config();
    obj.mongoose = new Mongo(
      process.env.MONGO_HOST,
      process.env.MONGO_PORT,
      process.env.MONGO_PASSWORD,
      process.env.MONGO_USER,
      process.env.MONGO_DATABASE,
      process.env.MONGO_AUTH
    );

    await obj.mongoose.connect();

    obj.settings = await obj.mongoose.parameters();
    obj.exec = promisify(exec);
  }
};

module.exports = obj;
