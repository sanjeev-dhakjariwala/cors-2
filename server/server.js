const { app, PORT } = require("./app");

app.listen(PORT, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`);
});
