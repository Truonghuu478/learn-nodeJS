const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// bắt đầu bằng / kết thúc không có dấu "/"
app.get("/test", (request, response) => {
  response.status(200).send("res truong");
});

// GET
// Giá trị res.json() được trả về một mảng JSON
app.get("/test/:hoten/:lop", (request, response) => {
  const { hoten, lop } = request.params;
  response.status(400).json([hoten, lop]);
});

const listData = [
  {
    id: 1,
    username: "truong",
    password: "hahaha",
  },
  {
    id: 2,
    username: "vy",
    password: "22323",
  },
];

// POST
app.post("/them", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json([username, password]);
  } else {
    res.status(400).send("Thiếu thông tin người dùng");
  }
});

app.put("/sua/:id", (req, res) => {
  const { username, password } = req.body;
  const { id } = req.params;
  const index = listData.findIndex((item) => item.id == id);
  if (index !== -1) {
    listData[index] = { ...listData[index], username, password };
    res.status(200).json(listData[index]);
  } else {
    res.status(404).send("Không tìm thấy người dùng");
  }
});

app.delete("/xoa/:id", (req, res) => {
  const { id } = req.params;
  const index = listData.findIndex((item) => item.id == id);
  if (index !== -1) {
    listData.splice(index, 1);
    res.status(200).send("Xóa thành công");
  } else {
    res.status(404).send("Không tìm thấyngười dùng");
  }
});

app.listen("8080", () => {
  console.log("hello nodejs");
});