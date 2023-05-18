// === 2, file system ===

let fs = require("fs");
// fs là file system: ;

// const { stdin } = require("process");
// import * as fs from "fs";
// console.log("fs: ", fs);

//sử dụng callback ở tham số thứ 3
// appendFile là hàm tương tác với ...
// fs.appendFile(`${__dirname}/messages.txt`, "hello works", () => {
//   console.log("them file thanhf coong");
// });

// sử dụng await

// fs.writeFile(`${__dirname}/writeFile.txt`, "writeFile", () => {
//   console.log("them file thanhf coong");
// });

// fs.readFile(
//   `${__dirname}/writeFile.txt`,
//   { encoding: "utf-8" },
//   (err, data) => {
//     if (err) {
//       console.log("readFile", err);
//     } else {
//       console.log("readFile", data);
//       //Nếu không set encoding : "uft-8 thì dât là buffer"
//       //=>dùng data.toSring() để chuyển thành string
//       stdin.write(data);
//     }
//   }
// );

// thử thách cách thê nội dung vào file chứ kh ghi đè

//=== 4. Error handling===
let fstwo = require("fs/promises");

process
  .on("uncaughtException", (err) => {
    console.log("process", err);
  })
  .on("unhandledRejection", (err) => {
    // lien quan loi promise
    console.log("process", err);
  });

const readTEXT = async () => {
  try {
    const result = await fstwo.readFile(`${__dirname}/writeFile.txt`, "utf-8");
    console.log("result: ", result);
  } catch (error) {
    console.log("result: ", error);
  }
};

// tạo ra 1 trình lắng nghe global, tất cả những lỗi không được xử lý sẽ tự động nhảy vào đây

readTEXT();
//=== 5.packages===

let ld = require("lodash");
