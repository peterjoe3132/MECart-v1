const express = require('express')
const app = express()
var cors = require('cors')
const port = 8080
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qwerty',
  database : 'db1',
  port     : '8000'
});
app.use(cors());
app.options('*', cors());  // enable pre-flight
var bodyParser = require('body-parser');

app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){ 
    connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

    res.send('Hello World!')

})

app.post('/sellad',function(req, res){ 
    var body1= req.body;
    console.log(body1);
connection.connect()
connection.query('insert into product(product_name,product_desc,imgurl,category_id,price) values (body1.adtitle,body1.adesc,body1.adphoto,body1.category,body1.price)', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()

    res.send('submitted!')

})
    app.use(express.static('public'));
    app.get('/test', function (req, res) {
       res.sendFile( __dirname + "/" +"public/test.html" );
    })
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))