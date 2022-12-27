const express = require('express')
const app = express()

// static files
app.use(express.static(__dirname + '/public'));

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.render('index.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about-us.html');
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about-us.html');
})
app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
})
app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/public/works.html');
})
app.get('/pricing', (req, res) => {
    res.sendFile(__dirname + '/public/pricing.html');
})
app.get('/faq', (req, res) => {
    res.sendFile(__dirname + '/public/faq.html');
})
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html');
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact-us.html');
})


app.get('/login', (req, res) => {
    res.render('login-page.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/register', (req, res) => {
    res.render('register.ejs')
})


app.listen(3000)