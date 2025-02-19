const http= require('http')
http.createServer((req,res)=>{
    res.statusCode=200 //200 is a success statuscode
    res.setHeader('Content-Type',"text/html") //for apply html tags
    res.write("<h1>GOOD AFTERNOON STUDENTS</h1>")
    res.write("<br>")
    res.write("<h3>GIM</h3>")
    res.write("<br>")
    res.write("<h3>GIM</h3>")
    res.write(`
        <form>
        <label>Username:</label>
        <input type="text"></input>
        <br><br>
        <label >Password:</label>
         <input type="password"></input>
        <br><br>
        <input type="submit" value="Submit">
        </form>
        
        `)
    res.end()
}).listen(2000)