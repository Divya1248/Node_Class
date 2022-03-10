import { mkdir, writeFile, unlink } from "fs";
import { rmdir } from "fs/promises";

// mkdir("src", err => {
//   if (err) throw err;
//   console.log("sucessfully src created");
//   // write file
//   writeFile("./src/index.js", "Index data", err => {
//     if (err) throw err;
//     console.log("successfully index created");
//   });
//   writeFile("./src/app.js", "App data", err => {
//     if (err) throw err;
//     console.log("successfully app created");
//   });
//   // dir create components folder inside src
//   mkdir("./src/components", err => {
//     if (err) throw err;
//     console.log("successfully components folder created");
//     mkdir("./src/components/Navbar", err => {
//       if (err) throw err;
//       console.log("successfully navbar folder created");
//       // writefile
//       writeFile("./src/components/Navbar/navbar.jsx", "navdata", err => {
//         if (err) throw err;
//         console.log("finally navbar file created");
//       });
//     });
//   });
// });

unlink("./src/components/Navbar/navbar.jsx", err => {
  if (err) throw err;
  console.log("navbar file deleted");
  rmdir("./src/components/Navbar", err => {
    if (err) throw err;
    console.log("navbar folder deleted");
  });
});
rmdir("./src/components", err => {
  if (err) throw err;
  console.log("component folder deleted");
});
unlink("./src/index.js", err => {
  if (err) throw err;
  console.log("index file deleted");
});
unlink("./src/app.js", err => {
  if (err) throw err;
  console.log("app file deleted");
});
rmdir("./src", err => {
  if (err) throw err;
  console.log("app file deleted");
});
