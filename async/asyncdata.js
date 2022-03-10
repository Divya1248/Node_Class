import { readFile, writeFile } from "fs";

readFile("./mernstack.js", "utf-8", (err, data) => {
  if (err) throw err;
  // write file
  writeFile("Meanstack.js", data, err => {
    if (err) throw err;
    console.log("successfully data written....");
    console.log(data);
  });
});
