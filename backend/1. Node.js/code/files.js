const fs = require("fs");

// Read a file

fs.readFile("./documents/doc.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Write content in a file

fs.writeFile(
  "./documents/doc2.txt",
  "I wrote this text inside the file with fs",
  () => {
    console.log("file written successfully");
  }
);
