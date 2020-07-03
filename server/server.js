const   express = require('express'),
        path = require('path'),
        http = require('http'),
        socketIO = require('socket.io');
const { Socket } = require('net');



const app = express();
const publicPath = path.join(__dirname, '../public');
const server = http.createServer(app);
const io = socketIO(server);

require('dotenv').config();
app.use(express.static(publicPath));

io.on("connection", (socket)=>{
    console.log(`NEW USER CONNECTED`);  

    socket.on("disconnect", ()=>{
        console.log(`USER DISCONNECTED`);
    })
});




server.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED AT ${process.env.PORT}`);
})

