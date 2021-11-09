var express = require("express");
var router = express.Router();

router.get("/new", (req, res) => {
  res.send("Student form")
});

router.post("/", (req, res) => {
  
})

router.get("/", (req, res) => {
  
})

module.exports = router;