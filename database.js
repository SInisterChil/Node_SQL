app.get("/createDatabase", (req, res) => {
  let databaseName = "shubham"

  let createQuery = `CREATE DATABASE ${databaseName}`

  database.query(createQuery, (err) => {
    if (err) throw err

    console.log("Database Created Successfully !")

    let useQuery = `USE ${databaseName}`
    database.query(useQuery, (error) => {
      if (error) throw error

      console.log("Using Database")

      return res.send(`Created and Using ${databaseName} Database`)
    })
  })

  let getQuery = "SELECT * FROM users"

  db_con.query(getQuery, (err, rows) => {
    if (err) throw err

    console.log(rows)
  })

  let updateQuery = "UPDATE publishers SET salary=0"

  db_con.query(updateQuery, (err, rows) => {
    if (err) throw err
    console.log(rows)
  })

  let deleteQuery = "DELETE FROM users"

  db_con.query(deleteQuery, (err, rows) => {
    if (err) throw err

    console.log("Cleared users Table")
  })
})
