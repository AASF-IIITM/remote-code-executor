const {
  execPromise,
  writeFilePromise,
  deleteFilePromise,
} = require("./file-executor.js");

const execNode = async (data) => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.js`;
  try {
    await writeFilePromise(filePath, data);
    const output = await execPromise(`node utils/temp/${filename}.js`);
    // console.log(output);
    await deleteFilePromise(filePath);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
const execCpp = async (data) => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.cpp`;
  try {
    await writeFilePromise(filePath, data);
    await execPromise(
      `g++ -o utils/temp/${filename} utils/temp/${filename}.cpp`,
      true
    );

    const output = await execPromise(`./utils/temp/${filename}`);
    // console.log(output);
    await deleteFilePromise(filePath);
    await deleteFilePromise(`./utils/temp/${filename}`);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
const execPython = async (data) => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.py`;
  try {
    await writeFilePromise(filePath, data);
    const output = await execPromise(`python3 utils/temp/${filename}.py`);
    // console.log(output);
    await deleteFilePromise(filePath);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
module.exports = { execNode, execPython, execCpp };
