
const { execPromise, writeFilePromise, deleteFilePromise } = require("./file-executor.js");

const execNode =  async (data) => {
    const filePath = __dirname + "/temp/code.js"
  try {
    await writeFilePromise(filePath, data);
    const output = await execPromise("node utils/temp/code.js");
    // console.log(output);
    await deleteFilePromise(filePath);
    return output;
  } catch(err) {
    // console.log(err);
    return err;
  }
}
module.exports = { execNode }