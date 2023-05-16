
const { getOne, getThree } = require('./script')

console.log(__dirname);


// fs : file system 
const fs = require('fs')

// appendFile : ghi đè 
fs.appendFile(__dirname + '/index.txt', "abc", () => {
    // console.log('haha');
})

fs.writeFile(__dirname+'/index.txt',"abc",()=>{
    // console.log('haha');
})

fs.readFile('./index.txt',"utf-8",(err,data)=>{
    console.log('readfile',err,data);
})


fs.access('t')
fs.constants