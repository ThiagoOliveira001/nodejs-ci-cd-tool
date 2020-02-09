module.exports = () => {
  app.get("/api/ping", (req, res) => {
    return res.ok({ now: new Date(), api: "UP" }, "PING");
  });
};
