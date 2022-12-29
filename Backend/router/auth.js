const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`hello from the router`);
});

router.post('/register', (req, res) => {
  console.log(req.body);
  res.({ message: req.body });
});

module.exports = router;
