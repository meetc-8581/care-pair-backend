var express = require("express");
var router = express.Router();
const { Patient } = require("../models/patientModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  //   const allPatients = Patients.find();
  const allPatients = await Patient.find();
  res.send(allPatients);
});

router.get("/names", async function (req, res, next) {
  //   const allPatients = Patients.find();
  const allPatients = await Patient.find().select({ fname: 1, Id: 1 });
  res.send(allPatients);
});

router.get("/id", function (req, res, next) {
  var id = req.query.name;
  res.send("respond with patients");
});

module.exports = router;
