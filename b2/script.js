
//  const getOne = ()=>{
//     return 1
// }

//  const getThree = ()=>{
//     return 3
// }
// es6 module
//  export {getOne,getThree}
//commonjs 
// module.exports = {getOne,getThree}



const yargs = require('yargs') // hỗ trợ thao tác  lấy các biến trên môi trường node dễ dàng hơn

const {hideBin} = require('yargs/helpers')

const { argv} = yargs(hideBin(process.argv))

const getUser = ()=>{
    const {so1,so2} = argv
    console.log(so1+so2);
}
const getID = ()=>{
    console.log(argv.nam);
}
yargs.command(
    {
        command:"get-user",
        handler: getUser
    }
).command({
    command:'get-id',
    handler:getID
}).parse()

