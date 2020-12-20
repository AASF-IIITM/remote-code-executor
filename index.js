
const { execPromise, writeFilePromise, deleteFilePromise } = require("./utils/file-executor.js");

const data = `console.log("Hello World!!!");`;

// fs.writeFile("temp/code.js", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
//   exec("node temp/code.js", function(error, stdout, stderr) {
//     console.log(error);
//     console.log(stdout);
//     console.log(stderr);
    
//     fs.unlink("temp/code.js", () => {
//       console.log("File Deleted!!!")
//     });
//   });
// });

const test =  () => {
  try {
    await writeFilePromise("temp/code.js", data);
    const output = await execPromise("node temp/code.js");
    console.log(output);
    await deleteFilePromise("temp/code.js");
  } catch(err) {
    console.log(err);
  }
  
  // writeFilePromise("temp/code.js", data)
  //   .then(() => execPromise("node temp/code.js"))
  //   .then((output) => {
  //     console.log(output);
  //     return deleteFilePromise("temp/code.js");
  //   })
  //   .catch((err) => console.log(err))
}

test();