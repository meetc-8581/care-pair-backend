var express = require("express");
// var tf = require("@tensorflow/tfjs");
var router = express.Router();
const { PythonShell } = require("python-shell");
const { spawn } = require("child_process");
// var buf = Buffer.from("abc");

const predcitions = {
  data: [
    { id: "1", name: "Sarah1", score: 96 },
    { id: "2", name: "Jessica1", score: 94 },
    { id: "3", name: "Elizabeth1", score: 90 },
    { id: "4", name: "Madison1", score: 89 },
  ],
};

/* GET home page. */
router.get("/", function (req, res, next) {
  //   const modelPath = "./model.joblib";

  const modelPath = "./public/model.joblib";

  const inputData = [req.body.data];

  const scriptPath = "./script.py";

  output = [];

  script_name = "./public/script.py";

  options = [script_name, modelPath, JSON.stringify(inputData)];
  console.log(options);
  const python = spawn("python", options);

  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    console.log(data.toString());
    output.push(data);
  });

  python.on("message", (code) => {
    console.log(`message ${code}`);
  });

  python.on("error", (code) => {
    console.log(`message ${code}`);
  });
  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });

  res.status(200).send(output);
});

module.exports = router;
