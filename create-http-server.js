const http=require('http');
const myServer=http.createServer((req,res)=>{
  res.write('<b>Hello World from HTTP SERVER..');
  res.end(asa);
})

myServer.listen(3005)