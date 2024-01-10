// console.log("Hello World!");


const express = require("express")
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

//Middleware là các chức năng chạy trước khi xử lý các yêu cầu hoặc sau khi xử lý 
app.use((req, res, next) => {
    // some thing...
    console.log('Middleware is running...');
    next()
})

//setup routing

app.get("/", (req, res) => {
    res.send("hello nodejs")
})


app.post("/detail", (req, res) => {
    const info = req.body
    console.log(info);
    res.json({ message: 'User created successfully', user: info });

    // res.send("hello detail")
})

app.get("/about", (req, res) => {
    res.send("hello about")
})
app.listen(port, () => {
    console.log("listen start serve");
})