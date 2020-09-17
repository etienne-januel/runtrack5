const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
 
//Create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'runtrack05'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
 
//route for http://localhost:3000 (get) : request users
app.get('/',(req, res) => {
    let sql = "SELECT * FROM utilisateurs";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('user_list',{
            results: results
        });
    });
});

//route for http://localhost:3000/users (get) : request users
app.get('/users',(req, res) => {
    let sql = "SELECT * FROM utilisateurs";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('user_list',{
            results: results
        });
    });
});

//route for http://localhost:3000/users/get (get) : request users
app.get('/users/get',(req, res) => {
    let sql = "SELECT * FROM utilisateurs";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('user_list',{
            results: results
        });
    });
});

//route for http://localhost:3000/users/add (get) : formulaire de création d’utilisateur
app.get('/users/add',(req, res) => {
    res.render('user_add');
});

//route for http://localhost:3000/users/add (post) : create user
app.post('/users/add',(req, res) => {
  let data = {firstname: req.body.user_firstname, lastname: req.body.user_lastname, email: req.body.user_email};
  let sql = "INSERT INTO utilisateurs SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for http://localhost:3000/users/update (get) : formulaire de modification d’utilisateur
app.get('/users/update/:id',(req, res) => {
    let id = Number(req.params.id);
    let sql = "SELECT * FROM utilisateurs WHERE id = "+id;
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('user_edit',{
            results: results
        });
    });
});

//route for http://localhost:3000/users/update/:id (put) : update user
app.put('/users/update/:id',(req, res) => {
    let id = Number(req.params.id);
    console.log(id);
    let sql = "UPDATE utilisateurs SET firstname='"+req.body.user_firstname+"', lastname='"+req.body.user_lastname+"', email='"+req.body.user_email+"' WHERE id="+id;
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });

 
//route for http://localhost:3000/users/delete/:id (delete) : delete user
app.delete('/users/delete/:id',(req, res) => {
  let sql = "DELETE FROM utilisateurs WHERE id="+req.body.user_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});
 
//server listening
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});