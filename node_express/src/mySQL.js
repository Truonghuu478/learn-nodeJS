const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodedemo"
});

conn.connect((err) => {
    if (err) {
        console.log("Error connecting to database", err);
    } else {
        console.log("Database connected successfully");
    }
});

app.get("/api/getBooks", (req, res) => {
    const sql = "SELECT * FROM books";
    conn.query(sql, (err, result) => {
        if (err) {
            console.log("Error querying database", err);
            res.status(500).send("Internal server error");
        } else {
            console.log("Books retrieved successfully");
            res.status(200).send(result);
        }
    });
});


// get id 

app.get('/api/book/:id', async(req,res)=>{
    const {id} = req.params 
    // const sql = `SELECT * FROM books WHERE id = ${id}`; //c1
    const sql = "SELECT * FROM books"; //c1
    // conn.query(sql, (err, result) => {
    //     if (err) {
    //         res.status(500).send("Khong tim thay id:"+id);
    //     } 
    //     else{
    //         const book = result.find(item=>item.id == id)
    //         console.log(book);
    //         res.status(200).send(book);

    //     }
    // });

    try {
        const result = await conn.promise().query(sql)
        res.status(200).send(result[0])

    } catch (error) {
        res.status(500).send(result)
    }

},[])

app.post('/api/createBook',(req,res)=>{
    const { name,price,page,released_year,author_name} = req.body
    const sql = `INSERT INTO books(name,price,page,released_year,author_name) VALUES(${name},${price},${page},${released_year},${author_name})`
    
    conn.query(sql,(err,result)=>{
        if(err){
            res.status(500).send('Loi',err)
        }
       else  res.status(200).send(result)

    })
})
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
//post