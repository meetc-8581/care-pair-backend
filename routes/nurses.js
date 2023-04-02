var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with nurses");
});

router.get("/id", function (req, res, next) {
  var id = req.query.name;
  res.send("respond with nurses");
});

module.exports = router;
