const { exec } = require('child_process');

const execute = () => {
    exec("node temp/code.js", function(error, stdout, stderr) {
        console.log(error);
        console.log(stdout);
        console.log(stderr)
    });
}

module.exports = { execute };