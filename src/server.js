import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server)

app.use(express.static('public'))

const port = 3000

server.listen(port, () => {
    console.log(`> Servidor escutando na porta: ${port}`)
})