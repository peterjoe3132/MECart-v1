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
   values1=[body1.category];
    var sql1="SELECT category_id FROM category WHERE category_name=? ";
    connection.query(sql1, values1, function(err,result){
      if(err) throw err;
      body1.category=result;
      console.log(body1.category[0].category_id);
      console.log("read from the table");
      values=[body1.adtitle,body1.adesc,body1.adphoto,body1.category[0].category_id,body1.adprice,body1.contname,body1.contnum]
    console.log(values)
    console.log(body1.category[0].category_id);
  var sql = "INSERT INTO product (product_name,product_desc,imgurl,category_id,price,contname,contnum) VALUES(?,?,?,?,?,?,?)";
  connection.query(sql, values, function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
    })
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

app.post('/edit',function(req, res){
  //connection.connect()
    var body2=req.body
    values2=[body2.product_id];
    var sql3="SELECT * FROM product WHERE product_id=? ";
    connection.query(sql3, values2, function(err,result){
      if(err) throw err;
      console.log(result);
      res.send(result);
    });
  //connection.end()
    })

    app.post('/editad',function(req, res){ 
      var body3= req.body;
     values3=[body3.category];
      var sql1="SELECT category_id FROM category WHERE category_name=? ";
      connection.query(sql1, values3, function(err,result){
        if(err) throw err;
        body3.category=result;
        console.log(body3.category[0].category_id);
        console.log("read from the table");
        values4=[body3.adtitle,body3.adesc,body3.adphoto,body3.category[0].category_id,body3.adprice,body3.contname,body3.contnum,body3.product_id]
      console.log(values4)
      console.log(body3.category[0].category_id);
    var sql = "update product set product_name=?,product_desc=?,imgurl=?,category_id=?,price=?,contact_name=?,phone=? where product_id=?";
    connection.query(sql, values4, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
      res.send(result)
    });
      })
  //connection.end()
      
  })

    app.use(express.static('public'));
    app.get('/test', function (req, res) {
       res.sendFile( __dirname + "/" +"public/test.html" );
    })
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))