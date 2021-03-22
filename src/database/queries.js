const db = require('./db')

const QueriesSqlite3 = {
  getDataFromTable() {
    //3-Get data from table
    db.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) return console.error(err)
      console.log("Aqui estão seus registros: ")
      console.log(rows)
    })
  },
  createTable() {
    //1-Create Table
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
  },
  insertData() {
    //2-Insert data on table   
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

    function afterInsertData(err) {
      if(err) {
        return console.log(err)
      }

      console.log("Cadastrado com sucesso")
      console.log(this)
    }

    db.run(query, values, afterInsertData)
  },
  deleteDataFromTable(id) {
    //4-Deletar um dado da tabela
    db.run(`DELETE FROM ideas WHERE id = ?`, [id], function(err) {
      if (err) return console.error(err)
      console.log('Deletado com sucesso!', this)
    })
  },
}

function init() {
  QueriesSqlite3.getDataFromTable()
  // QueriesSqlite3.createTable()
  // QueriesSqlite3.insertData()
  // QueriesSqlite3.deleteDataFromTable(14)
}

init()