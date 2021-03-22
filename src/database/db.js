const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database('./src/database/database.db')

db.serialize(() => {
/* 
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `)

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
    "http://localhost:3000/assets/programmer.svg",
    "Cursos de Programação",
    "Estudo",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor nisi consequuntur, ipsam expedita vitae pariatur consectetur itaque ipsum dolore.",
    "http://rocketseat.com.br",
  ]

  db.run(query, values, function(err) {
    if (err) return console.error(err)
    console.log(this)
  })

  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.error(err)
    console.log(rows)
  })

  db.run(`DELETE FROM ideas WHERE id = ?`, [id], function(err) {
    if (err) return console.error(err)
    console.log('Deletado com sucesso!', this)
  }) */
})

module.exports = db