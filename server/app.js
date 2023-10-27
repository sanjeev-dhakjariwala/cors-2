const express = require("express");

const app = express();

const PORT = 4001;

app.use(
  express.json({
    limit: "50mb",
  })
);

app.get("/cors", async (req, res) => {
  try {
    const url = 'https://cors-1-pkgg.onrender.com/hello'
    const result = await fetch(url);
    res.status(200);
    res.send({
      success: true,
      result: await result.json()
    })
  } catch (error) {
    res.status(400);
    console.log(`Unable to fetch!!!`);
    res.send({
      success: false,
      message: "Unable to fetch due to CORS Policy!!!"
    })
  }
});

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "SERVER STARTED SUCCESSFULLY!!!",
  });
});

module.exports = { app, PORT };
