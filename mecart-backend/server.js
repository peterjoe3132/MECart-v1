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
    //connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

//connection.end()

    res.send('Hello World!')

})

app.post('/sellad',function(req, res){ 
    var body1= req.body;
    console.log(body1);
    // if(body1.category=="Stationary")
    // {
    //   body1.category=1;
    // }
    // else if(body1.category=="Books"){
    //   body1.category=2;
    // }
    // else if(body1.category=="Electronics"){
    //   body1.category=3;
    // }
    values1=[body1.category];
    var sql1="SELECT category_id FROM category WHERE category_name==? ";
    body1.category=connection.query(sql1, values1, function(err,result){
      if(err) throw err;
      console.log("read from the table");
    })
    values=[body1.adtitle,body1.adesc,body1.adphoto,body1.category,body1.adprice]
    console.log(values);
//connection.connect()
  var sql = "INSERT INTO product (product_name,product_desc,imgurl,category_id,price) VALUES(?,?,?,?,?)";
  connection.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
//connection.end()
    res.send('Ad had been Posted')

})
app.post('/buyproduct',function(req, res){
//connection.connect()
  var sql = "SELECT * FROM product";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
//connection.end()
   

})
    app.use(express.static('public'));
    app.get('/test', function (req, res) {
       res.sendFile( __dirname + "/" +"public/test.html" );
    })
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))