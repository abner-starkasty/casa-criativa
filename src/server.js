const express = require("express")
const server  = express()

const IdeasController = require("./controllers/Ideas.controller")

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .get('/', IdeasController.home)
  .post('/', IdeasController.create)
  .get('/ideias', IdeasController.ideas)

server.listen(3000, () => console.log('Server is running...'))