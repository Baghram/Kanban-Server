if(process.env.NODE_ENV == "development") {
    require('dotenv').config()

}
const controller = require('./controller/controller')
const express = require('express')
const app = express()
const router = require('./routes/index')
const errhandler = require('./middleware/errhandler')
const cors = require('cors')
const http = require('http').Server(app)
const io = require('socket.io')(http)
const axios = require('axios')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    req.io = io
    next()
})
app.use(router)

io.on('connection', function(socket) {
    global.socket = socket
    console.log('A User Connected')
    socket.emit('success', {message: 'Server Connected'})
    socket.on('join', function(msg) {
        socket.join(`room-${msg.ProjectId}`, function() {
            var nsp = io.of('room-1')
            let rooms = `You Are Currently in Room-${msg.ProjectId}`
            socket.emit('rooms', rooms)
        })
    })
    socket.on('exit', function(msg) {
        socket.leave(msg.ProjectId)
    })
    
    // console.log(io.sockets.adapter.rooms) // untuk cek list room
    
    socket.on('disconnect', function() {
        console.log('A User Disconnected')
    } )

})





app.use(errhandler)
// app.listen(process.env.PORT, () => {
//     console.log(`listening to port ${process.env.PORT}`)
// })
http.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})