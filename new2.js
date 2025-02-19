// console.log("abc");
// console.log(process.argv[1]);

const http=require("http")
const PORT=7999
http.createServer((req,res)=>{
    res.write("This is MERN")
    res.end()
})
.listen((err)=>{
    if (!err) console.log(`This server is running in ${PORT}`)
    
})