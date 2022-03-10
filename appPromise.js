const fs = require("fs/promises");
// fs.mkdir("src")
//   .then(_ => {
//     console.log("src created by using promises");
//     fs.writeFile("./src/app.js", "data")
//       .then(_ => {
//         console.log("app.js  created inside src by using promises");
//       })
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));

//  reading file through promises
// const fs = require("fs").promises;
// fs.readFile("./writeMeText", "utf-8")
//   .then(chunk => {
//     console.log(chunk);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // async and await
// let ReadDataByUsingAW = async () => {
//   try {
//     let data = await fs.readFile("./writeMeText", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// ReadDataByUsingAW;

// Rename the file
// const fs = require("fs").promises;
// fs.rename("./write.txt", "chombu.txt")
//   .then(_ => {
//     console.log("rename successfully");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// append file means add or insert information to existing information
fs.appendFile("./write.txt", "priyanka is waiting for...?")
  .then(_ => {
    console.log("append data in write.txt");
  })
  .catch(err => {
    console.log(err);
  });

// synchronously rename
// const fs1 = require("fs");
// fs1.renameSync("chombu.txt", "write.txt");

// name of abbreviation of change mode
// change the ownership of a file
fs.chown("./write.txt", 0777).then(_ => {
    console.log("changed mode");
})



