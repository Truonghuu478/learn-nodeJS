const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen("8080", () => {
  console.log("hello nodejs");
});
//bắt đầu bằng / kết thúc không có dấu "/"

app.get("/test", (request, response) => {
  response.status(200).send("res truong");
});
//GET
// Giá trị res,send() không được trả về number
app.get("/test/:hoten/:lop", (request, response) => {
  const { hoten, lop } = request.params;
  response.status(400).send([hoten, lop]);
});

const listData = [
  {
    id:1,
    username: "truong",
    password: "hahaha",
  },
  {
    id:2,
    username: "vy",
    password: "22323",
  },
];

// POST

app.post("/them", (req, res) => {
  console.log("req", req.body);
  if (req.body ) {
    const { username, password } = req.body
    res.status(200).send([username, password]);
  } else res.status(400).send("Loi khi gui");
});

app.put("/sua/:id", (req, res) => {
    const { username, password } = req.body
    const { id } = req.params

   const iIndedx = listData.findIndex(item=>item.id == id )
      listData[iIndedx] =  { ...listData[iIndedx],username, password }

      res.status(200).send('Sua thanh cong : ', listData[iIndedx]);
});

app.delete('/xoa/:id',(req,res)=>{
    const { id } = req.params

    const iIndedx = listData.findIndex(item=>item.id == id )
   if(iIndedx !== -1)  res.status(200).send('Sua thanh cong : ', listData[iIndedx]);
  else res.status(400).send('Sua failed : ', listData[iIndedx]);
})
