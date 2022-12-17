const express = require('express')
const app = express()

// static files
app.use(express.static(__dirname + '/DigiPants'))
app.use(express.static(__dirname + '/DigiPants/css'))
app.use(express.static(__dirname + '/DigiPants/63238e717124a8c9a4c94e41'))
app.use(express.static(__dirname + '/DigiPants/js'))
app.use(express.static(__dirname + '/DigiPants/632622573bb4e8a1d6504d34'))

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/login', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    res.render('register.ejs')
})

app.listen(3000)