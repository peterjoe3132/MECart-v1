const express = require('express')
const app = express()
const port = 8080
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qwerty',
  database : 'db1',
  port     : '8000'
});



app.get('/hello', function(req, res){ 
    connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

    res.send('Hello World!')

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))