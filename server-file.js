const fs=require('fs')
const http=require('http')

const myCustomServer=http.createServer((req,res)=>{
  fs.readFile('test.html',(err,data)=>{
    if (err){
      console.log(err)
    }
    res.end(data)
  })
})
myCustomServer.listen(3001)