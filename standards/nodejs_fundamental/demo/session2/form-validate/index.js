const path = require('path')
const express = require('express')
const layout = require('express-layout')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const helmet = require('helmet');

// Build routes for app
const routes = require('./routes')
// Start app with express framework
const app = express()

// Set views as folder contain views
app.set('views', path.join(__dirname, 'views'))
// Using ejs as view engine
app.set('view engine', 'ejs')

const middlewares = [
    helmet(),
    // Using layout of express layout
    layout(),
    // Set public as static folder
    express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
    session({
        secret: 'super-secret-key',
        key: 'super-secret-cookie',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60000 }
    }),
    flash(),
]
app.use(middlewares)

// app use routes
app.use('/', routes)

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

// Start app, listen port 3000 as default
app.listen(3000, () => {
    console.log(`App running at http://localhost:3000`)
})
