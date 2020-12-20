const { exec } = require('child_process');
const fs = require("fs");

// const execute = () => {
//     exec("node temp/code.js", function(error, stdout, stderr) {
//         console.log(error);
//         console.log(stdout);
//         console.log(stderr)
//     });
// }

const execPromise = (command) => new Promise((resolve, reject) => {
    exec(command, function(error, stdout, stderr) {
        if(error) reject(error);
        else {
            const isError = Boolean(stderr);
            resolve({ isError, output: stdout || stderr });
        }
    });
});

const writeFilePromise = (location, data) => new Promise((resolve, reject) => {
    fs.writeFile(location, data, function(err) {
        if(err) reject(err);
        else resolve();
    })
});

const deleteFilePromise = (location) => new Promise((resolve, reject) => {
    fs.unlink(location, (err) => {
        if(err) reject(err);
        else resolve();
    })
})


module.exports = {  execPromise, writeFilePromise, deleteFilePromise };