const express = require("express");
const app = express();

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ error: "Email required" });
  }
  users.push(req.body);
  res.status(201).send("User added");
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
