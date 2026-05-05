const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: "REBORN AI: " + message
  });
});

app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
