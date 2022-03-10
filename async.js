const fs = require("fs");
// Asynchronously reading file
// syntax
// fs.readFile(path, encoding,callback )
// fs.readFile("./index.js", { encoding: "utf-8" }, (err, chunk) => {
//   if (err) throw err;
//   console.log(chunk); //chunk is data stored in index.js
// });

// read and write file async
// fs.readFile("./text.txt", "utf-8", (err, chunk) => {
//   if (err) throw err;
//     console.log("successfully read it...");
//     // write file async
//   fs.writeFile("write.txt", chunk, err => {
//     if (err) throw err;
//     console.log("successfully written...");
//     console.log(chunk);
//   });
// });

// delete

// Asynchronously removes file or symbolic link. No argumnts other than possible exception are gievn to the completion callback
fs.unlink("./mernstack.js",err => {
  if (err) throw err;
  console.log("sucessfully delteed");
});
    
// es6 way
// import { readFile, writeFile } from "fs";


// readFile("./mernstack.js", "utf-8", (err, data) => {
//   if (err) throw err;
//   // write file
//   writeFile("Meanstack.js", data, err => {
//     if (err) throw err;
//     console.log("successfully data written....");
//     console.log(data);
//   });
// });
