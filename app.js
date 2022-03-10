// let { javafullstack, pythonfullstack, mernstack, testing } = require("./qspiders");
// let courses = require("./qspiders");
// console.log(courses)

// let MERN = mernstack("express", "node", "mangodb")
// MERN.forEach(mr => console.log(mr))

// es6 way
// import { javafullstack ,mernstack } from "./qspiders.js";
// console.log(javafullstack("java", "j2ee"))
// console.log(mernstack("javascript", "react"));

// importing by both name as well as default

// import fullstack, { javafullstack as mani, mernstack } from "./qspiders.js";
// console.log(mani("java","j2ee"))
// console.log(fullstack("amoigo"))
// console.log(mernstack("html","css","react"))

// importing all

// import * as JS from "./qspiders.js"
// console.log(JS.javafullstack("sql", 'java', "j2ee"))
// console.log(JS.default("mern", "mean"))

// import { obj}from "./qspiders.js"
// console.log(obj)
//

// let course = require("./qspiders.js")
// console.log(course.maernbatch1)
// console.log(course.maernbatch2);

//through encoding converting buffer to string
// const fs = require('fs')
// let readtxtsync = fs.readFileSync("./read.txt" ,{encoding:'utf-8'})
// console.log(readtxtsync)

//through tostring converting buffer to string
// const fs = require("fs");
// let readtxtsync = fs.readFileSync("./read.txt");
// console.log(readtxtsync.toString());

//writing file through node js
// const fs = require("fs");
// let readtxtsync = fs.readFileSync("./read.txt" ,'utf-8');
// let writeText = fs.writeFileSync("writeText.txt" , readtxtsync)
// let writeText = fs.writeFileSync("writeText.txt", "mad mangai");
// console.log(writeText);

//creating directory and file

// let fs = require("fs");
// fs.mkdirSync('jspiders');
// fs.writeFileSync("./jspiders/frontend.js", "hyml,css,javascript");
// fs.writeFileSync("./jspiders/backend.js" ,"nodejs ,expressjs, mangodb")

//deleting file synchronously
// fs.unlinkSync("./read.txt")

//deleting folders and files
// fs.unlinkSync("./jspiders/frontend.js");
// fs.unlinkSync("./jspiders/backend.js");
// fs.rmdirSync("./jspiders")

//asynchrounously reading data

// fs.readFile("./mani.js", "utf-8", (err, chunk) => {
//   if (err) throw err;
//   console.log(chunk);
// })
// console.log("hey whatsup")

// reading writing data into files asynchronously
// fs.readFile("./read.txt", "utf-8", (err, chunk) => {
//     if (err) throw err;
//     console.log("succesfully read that data...😍")
//     //writing file
//     fs.writeFile("./writeText.txt", chunk, (err) => {
//         if (err) throw err;
//         console.log('succefully written data...👍')
//         console.log(chunk)
//     })
// })

//es6 way of reading and writting files asynchronously
// import { readFile, writeFile } from "fs"

// readFile("./mernstack.js", "utf-8", (err, data) => {
//     if (err) throw err;
//     writeFile("meanstack.js", data, (err) => {
//         if (err) throw err
//         console.log('succefully file written');
//         console.log(data)
//     })
// })

//asynchronous way of deleting data
// let fs = require('fs')
// fs.unlink("./meanstack.js", (err) => {
//     if (err) throw err;
//     console.log("successfully deleted")
// })

//common js way
// let fs = require('fs')
// fs.mkdir("src", (err) => {
//     if (err) throw err;
//     console.log("src is created")
//     fs.writeFile("./src/index.js", "index data", (err) => {
//         if (err) throw err;
//         console.log("index.js is created");
//     })

//     fs.writeFile("./src/app.js", "app data", err => {
//       if (err) throw err;
//       console.log("app.js is created");
//     });
//     fs.mkdir("./src/Components", (err) => {
//         if (err) throw err;
//         console.log("Components is created")
//         fs.mkdir("./src/Components/navbar", (err) => {
//             if (err) throw err;
//             console.log("navbar component is successfully created")
//             fs.writeFile("./src/Components/navbar/Navbar.jsx", "im a navbar data", (err) => {
//                 if (err) throw err;
//                 console.log("nabar.jsx is created")
//             })

//         })
//     })
// })
//deleting in async way
let fs = require("fs");
fs.unlink("./src/Components/navbar/Navbar.jsx", err => {
  if (err) throw err;
  console.log("Navbar.jsx is deleted");
  fs.rmdir("./src/Components/navbar", err => {
    if (err) throw err;
    console.log("navbar component is deleted");
  });
  fs.rmdir("./src/Components", err => {
    if (err) throw err;
    console.log("Components is deleted");
  });

  fs.unlink("./src/app.js", err => {
    if (err) throw err;
    console.log("app.jsx is deleted");
  });

  fs.unlink("./src/index.js", err => {
    if (err) throw err;
    console.log("index.jsx is deleted");
  });

  console.log("succefully all are deleted");
});
