const express = require('express');
const app = express();

const Settings = require("./settings");
const Routes = require("./lib/routes");

const db = require('./lib/db');

// Static path
const path = __dirname + '/public/';

// Set path of views is html folder
app.set('views', './html');

// Set view engine is pug
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/', Routes);
port = Settings.app.APP_PORT;

app.listen(port, function () {
    console.log(`Server started ${port}`)
})