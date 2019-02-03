const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
  console.log('New user connected')

  socket.on('createMessage', (newEmail) => {
    console.log('createEmail', newEmail)
  })

  socket.emit('newMessage', {
    from: 'Evil',
    text: 'HEllo from server',
    createdAt: 234234324
  })

  socket.on('disconnect', () => {
    console.log('User was Disconnected')
  })
})

server.listen(port, () => {
  console.log(`Server started up on ${port}`)
})
