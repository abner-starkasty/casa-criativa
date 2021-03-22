const express = require("express")
const server  = express()
const db      = require("./database/db")

const ideas = [
  {
    image: "http://localhost:3000/assets/programmer.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
  {
    image: "http://localhost:3000/assets/exercise.svg",
    title: "Exercícios",
    category: "Saúde",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
  {
    image: "http://localhost:3000/assets/meditation.svg",
    title: "Meditação",
    category: "Mentalidade",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
  {
    image: "http://localhost:3000/assets/karaoke.svg",
    title: "Karaokê",
    category: "Diversão em Família",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
  {
    image: "http://localhost:3000/assets/movie.svg",
    title: "Filmes",
    category: "Diversão em Família",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
  {
    image: "http://localhost:3000/assets/painting.svg",
    title: "Pintura",
    category: "Hobbie",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    url: "http://rocketseat.com.br",
  },
]

server.use(express.static('public'))

const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .get('/', (req, res) => {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) {
        console.error(err)
        return res.send('Erro no banco de dados!')
      }
      
      const reversedIdeas = [...rows].reverse()

      let lastIdeas = []
      for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
          lastIdeas.push(idea)
        }
      }

      return res.render('index.html', { ideas: lastIdeas })
    })
  })
  .get('/ideias', (req, res) => {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) {
        console.error(err)
        return res.send('Erro no banco de dados!')
      }
      
      const reversedIdeas = [...rows].reverse()

      return res.render('ideas.html', { ideas: reversedIdeas })
    })
  })

server.listen(3000, () => console.log('Server is running...'))