class Mongo {
  constructor(host, port, password, user, database, auth) {
    this._host = host;
    this._port = port;
    this._password = password;
    this._username = user;
    this._database = database;
    this._mongoose = require("mongoose");
    this._parameters = this._mongoose.model(
      "Parameters",
      new this._mongoose.Schema(),
      "parameters"
    );
    this._options = {
      useNewUrlParser: true,
      reconnectTries: 100,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4,
      authSource: auth
    };
  }

  async connect() {
    await this._mongoose.connect(this._url, this._options);
  }

  get _url() {
    return `mongodb://${this._user}:${this._pwd}@${this._host}:${this._port}/${this._database}`;
  }

  get _user() {
    return encodeURIComponent(this._username);
  }

  get _pwd() {
    return encodeURIComponent(this._password);
  }

  async parameters() {
    let result = await this._parameters.findOne();
    return result._doc;
  }

  get model() {
    return this._mongoose.model;
  }

  get Schema() {
    return this._mongoose.Schema;
  }
}

module.exports = Mongo;
