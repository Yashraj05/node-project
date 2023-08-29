import http from 'http';

const server  = http.createServer((req,res)=>
{
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);

})
server.listen(3000,()=>{
    console.log(`server is running `);
})
