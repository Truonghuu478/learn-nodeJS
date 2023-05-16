//lam bai tap data.json
//xem,them,sua,xoa =>data.json

const fs = require("fs");
const yargs = require("yargs");

const { hideBin } = require("yargs/helpers");
const { argv } = yargs(hideBin(process.argv));

function getData() {
  const data = fs.readFileSync("data.json", "utf-8");
  return JSON.parse(data);
}
function add() {
  const { id, hoTen, lop } = argv;

  const data = getData();

  data.push({ id, hoTen, lop });

  const newData = JSON.stringify(data, null, 2);

  fs.writeFile("data.json", newData, "utf8", (err) => {
    if (err) throw err;
    console.log("Dữ liệu đã được cập nhật vào file!");
  });
}

function update() {
  const data = getData();

  const { id, hoTen, lop } = argv;
  const obIdex = data.findIndex((item) => item.id == id);
  if (obIdex !== -1) {
    data[obIdex] = { ...data[obIdex], hoTen, lop };
  }
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Dữ liệu đã được cập nhật vào file!");
  });
}

function remove() {
    const data = getData();

  const { id } = argv;
  const obIdex = data.findIndex((item) => item.id == id);
  if (obIdex !== -1) {
    data.splice(obIdex,1)
  }
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Dữ liệu đã được cập nhật vào file!");
  });
}

yargs
  .command({
    command: "read",
    handler: getData,
  })
  .command({
    command: "add",
    handler: add,
  })
  .command({
    command: "update",
    handler: update,
  }).command({
    command:'remove',
    handler:remove
  })
  .parse();
