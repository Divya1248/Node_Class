const fs = require("fs");

// let readableStream = fs.createReadStream("./write.txt", "utf-8"); //return buffer data
// console.log(readableStream);
// add events to stream
// readableStream.on("data", chunk => {
//   console.log(chunk);
// });

// Read and write

let readableStream = fs.createReadStream("./write.txt", "utf-8");
let writeStream = fs.createWriteStream("shashi.txt", "utf-8");
readableStream.on("data", chunk => {
  console.log("successfully red chunk.......");
  // write stream
  writeStream.write(chunk, err => {
    if (err) throw err;
    console.log("successfully written");
    console.log(chunk.toString);
  });
});

// by using promises we cant do readabestream and writeable stream

// read and write by using pipe
let readableStream = fs.createReadStream("./write.txt", "utf-8");
let writeStream = fs.createWriteStream("shashi.txt", "utf-8");
readableStream.pipe(writeStream);
