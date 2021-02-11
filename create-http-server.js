const http=require('http');
const myServer=http.createServer((req,res)=>{
  console.log("A Request from : ",req.url);
    console.log("A Request header : ",req.header);
  res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
  res.write('<b>Hello World from çöşlüğ HTTP SERVER..');
  res.end();
})

myServer.listen(3005)