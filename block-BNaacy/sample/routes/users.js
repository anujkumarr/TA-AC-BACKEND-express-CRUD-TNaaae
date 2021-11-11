var express = require('express');
var router = express.Router();
var User = require("../model/User")
router.get("/new", (req, res) => {
  res.render("newusers");
})


router.post("/", (req, res,next) => {
  let data = req.body;
     User.create(data, (err, createdUser) => {
       console.log(err, createdUser);
       if (err) return next(err);
       res.redirect('/');
     });
})

module.exports = router;
