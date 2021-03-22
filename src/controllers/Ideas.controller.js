const db = require("../database/db")

class IdeasController {
  home(req, res) {
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
  }

  create(req, res) {
    const { image, title, category, description, link } = req.body

    const query = `
      INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
      ) VALUES (?,?,?,?,?);
    `
    const values = [
      image,
      title,
      category,
      description,
      link
    ]

    db.run(query, values, function(err) {
      if (err) {
        console.error(err)
        return res.send('Erro no banco de dados!')
      }

      return res.redirect('/')
    })
  }

  ideas(req, res) {
    db.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) {
        console.error(err)
        return res.send('Erro no banco de dados!')
      }
      
      const reversedIdeas = [...rows].reverse()

      return res.render('ideas.html', { ideas: reversedIdeas })
    })
  }
}

module.exports = new IdeasController()