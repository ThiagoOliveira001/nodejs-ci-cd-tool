const cf = require("./config/config");
const init = require("./config/init");

(async () => {
  try {
    await cf.init();
    init();

    app.listen(cf.settings.port, () => {
      console.log(`SERVER IS RUNNING ON PORT ${cf.settings.port}`);
    });
  } catch (ex) {
    console.error(ex);
  }
})();
