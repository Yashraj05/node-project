import dotenv  from "dotenv"
import { createServer } from 'http';
dotenv.config();
const port = process.env.PORT;
console.log(port)



const server  = createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : 'text/plain'});
    res.end("hello world i am here" );
})
server.listen(port,()=>{
    console.log("server running");
    console.log(port)
})
