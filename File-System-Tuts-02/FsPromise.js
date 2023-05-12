// const fsPromise = require('fs').promises
const fsPromises = require("fs/promises");
const path = require("path");

const fsOperation = async () => {
  try {
    // READ FILE

    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      { encoding: "utf8" }
    );
    console.log(data);

    // HOW TO INPUT A TEXT INSIDE ANOTHER FILE
    const newData = await fsPromises.writeFile(
      path.join(__dirname, "new-Files", "write.txt"),
      data
    );
    console.log(newData);

    //  HOW TO UPDATE FILES
    const newUpdate = await fsPromises.appendFile(
      path.join(__dirname, "new-Files", "write.txt"),
      "\n\nHello, I have been updated"
    );
    console.log(newUpdate);

    // HOW TO RENAME
    const newRename = await fsPromises.rename(
        path.join(__dirname, "new-Files", "write.txt"),
        path.join(__dirname, "Files", "new-write.txt")
    )
    console.log(newRename);

    const del = await fsPromises.unlink (
        path.join(__dirname, "Files", "starter.txt"),
    )
     console.log(del);

  } catch (error) {
    console.error(error);
  }
};

fsOperation();
