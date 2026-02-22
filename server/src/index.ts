// simple socket connections perisitent & all. from server to cliebt.

// @ts-ignore
// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8081 });


// wss.on("connection", function (socket) {
//     console.log("user connected.")
//     setInterval(() => {
//         const random = Math.random()
//         socket.send(`solana price is ${random}`)
//     }, 1000)
// })

// @ts-ignore



//this one is for basic  msg from client to server and server to client
// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8081 });


// wss.on("connection", function (socket) {
//     console.log("user connected.")
//     setTimeout(() => {
//         const random = Math.random()
//         socket.send(`solana price is ${random}`)
//     }, 1000)
//     socket.on('message', (e) => {
//         console.log(e.toString())
//     })


// })

//@ts-ignore
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 })

wss.on("connection", function (socket) {
    console.log("user connected")
    socket.send("hello hello")
    //on msg  recieved as ping we send pong.
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong")
        }
    })

})