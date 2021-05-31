const { exec } = require("child_process");
const fs = require("fs");

const execPromise = (command, noBuffer = false) =>
  new Promise((resolve, reject) => {
    exec(
      command,
      noBuffer
        ? {}
        : {
            timeout: 2000,
            maxBuffer: 1024 * 1024 * 5,
          },
      function (error, stdout, stderr) {
        console.log(stdout, stderr, error);
        if (error)
          reject(JSON.stringify(error, Object.getOwnPropertyNames(error)));
        else {
          const isError = Boolean(stderr);
          resolve({ isError, output: stdout || stderr });
        }
      }
    );
  });

const writeFilePromise = (location, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(location, data, function (err) {
      if (err) reject(err);
      else resolve();
    });
  });

const deleteFilePromise = (location) =>
  new Promise((resolve, reject) => {
    fs.unlink(location, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

module.exports = { execPromise, writeFilePromise, deleteFilePromise };
