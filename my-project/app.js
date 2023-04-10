const express = require('express');
const app = express();
const LogInCollection = require("./mongo")

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
  });
  
  app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/public/html/login.html');
  });
  
  app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/public/html/signup.html');
  });




  app.post('/login', async (req, res) => {
    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check && check.password === req.body.password) {
            res.redirect('/')
        } else {
            res.send("incorrect password")
        }
    } catch (e) {
        res.send("wrong details")
    }
})




app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phno: req.body.phno,
        password: req.body.password
    }

    const checking = await LogInCollection.findOne({ name: req.body.name })

    try {
        if (checking && checking.name === req.body.name && checking.password === req.body.password) {
            res.send("user details already exist")
        } else {
            await LogInCollection.insertMany([data])
            req.flash('success', 'Signup successful!')
            res.redirect('/') // Redirect to home page
        }
    } catch {
        res.redirect('/')
    }
})


  
  app.listen(3002, function() {
    console.log('Server is listening on port 3002');
  });
  
