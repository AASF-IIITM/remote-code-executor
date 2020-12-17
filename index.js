
const { execute } = require("./utils/file-executor.js");
const {exec} = require("child_process");
const fs = require("fs");

const data = `console.log("Hello World!!!");`;

fs.writeFile("temp/code.js", data, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
  exec("node temp/code.js", function(error, stdout, stderr) {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
    
    fs.unlink("temp/code.js", () => {
      console.log("File Deleted!!!")
    });
  });
});
// execute();