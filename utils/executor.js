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
    const output = await execPromise(`node ./utils/temp/${filename}.js`, {
      timeout: 2000,
      maxBuffer: 1024 * 1024 * 5,
    });
    await deleteFilePromise(`./utils/temp/${filename}.js`);
    return output;
  } catch (err) {
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
      `g++ -o ./utils/temp/${filename} ./utils/temp/${filename}.cpp`
    );
    const output = await execPromise(`./utils/temp/${filename}`, {
      timeout: 2000,
      maxBuffer: 1024 * 1024 * 5,
    });
    await deleteFilePromise(`./utils/temp/${filename}.cpp`);
    await deleteFilePromise(`./utils/temp/${filename}`);
    return output;
  } catch (err) {
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
    const output = await execPromise(`python3 ./utils/temp/${filename}.py`, {
      timeout: 2000,
      maxBuffer: 1024 * 1024 * 5,
    });
    await deleteFilePromise(`./utils/temp/${filename}.py`);
    return output;
  } catch (err) {
    return err;
  }
};

module.exports = { execNode, execPython, execCpp };
