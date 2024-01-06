
const express=require('express');
const app=express();

const http=require('http');
const path= require('path');
const server=http.createServer(app);
app.use(express.static(path.resolve("./public")));

const Server=require('socket.io');
const io=Server(server);

io.on('connection',(Socket)=>{
    Socket.on("user-message",(message)=>{//user-message wala hi lena socket.emit()wala mein
        // console.log('a new user message',message);
        io.emit('message',message);
    });
})

app.get('/',(req,resp)=>{
    resp.sendFile("/public/index.html")
})

server.listen(11501,()=>{
    console.log("server is running on 11501");
})
