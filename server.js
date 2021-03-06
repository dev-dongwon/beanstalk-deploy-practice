import path from "path";
const express = require("express");
const PORT = process.env.HTTP_PORT || 4001;
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.send("go and don't give up");
});

app.get("/flower", (req, res) => {
  res.json({
    name: "dongwon",
    feeling: "angry"
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
