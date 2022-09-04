const express = require('express');
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 5000
const { v4 :  uuidv4} = require("uuid")

app.get("/", (req, res) => {
    res.status(200).json({url: `/${uuidv4()}`})
});


app.get("/:room", (req, res) => {
    const roomId = req.params.room;
    res.status(200)
});

server.listen(port,()=>{
    console.log(`server connected on ${port}`)
});