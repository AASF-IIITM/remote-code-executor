const {
  execPromise,
  writeFilePromise,
  deleteFilePromise,
} = require("./file-executor.js");

const execNode = async (data, input="") => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.js`;
  const inputPath = __dirname + `/temp/${filename}.input`;
  try {
    await writeFilePromise(filePath, data);
    await writeFilePromise(inputPath, input);
    const output = await execPromise(`node utils/temp/${filename}.js < utils/temp/${filename}.input`);
    // console.log(output);
    await deleteFilePromise(filePath);
    await deleteFilePromise(inputPath);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
const execCpp = async (data, input="") => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.cpp`;
  const inputPath = __dirname + `/temp/${filename}.input`;
  try {
    await writeFilePromise(filePath, data);
    await writeFilePromise(inputPath, input);
    await execPromise(
      `g++ -o utils/temp/${filename} utils/temp/${filename}.cpp`,
      true
    );

    const output = await execPromise(`./utils/temp/${filename} < utils/temp/${filename}.input`);
    // console.log(output);
    await deleteFilePromise(filePath);
    await deleteFilePromise(`./utils/temp/${filename}`);
    await deleteFilePromise(inputPath);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
const execPython = async (data, input="") => {
  const filename = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  const filePath = __dirname + `/temp/${filename}.py`;
  const inputPath = __dirname + `/temp/${filename}.input`;
  try {
    await writeFilePromise(filePath, data);
    await writeFilePromise(inputPath, input);
    const output = await execPromise(`python3 utils/temp/${filename}.py < utils/temp/${filename}.input`);
    // console.log(output);
    await deleteFilePromise(filePath);
    await deleteFilePromise(inputPath);
    return output;
  } catch (err) {
    // console.log(err);
    return err;
  }
};
module.exports = { execNode, execPython, execCpp };
