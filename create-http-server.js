const http=require('http');
const myServer=http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
  res.write('<b>Hello World from çöşlüğ HTTP SERVER..');
  res.end();
})

myServer.listen(3005)