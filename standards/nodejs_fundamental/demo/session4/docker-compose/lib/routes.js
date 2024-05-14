const express = require('express');
const router = express.Router();
const Note = require("./controllers/note");

router.get('/testnotes', (req, res) => {
    Note.index(req, res);
});

router.get('/', (req, res) => {
    Note.index(req, res);
});

router.get('/list', (req, res) => {
    Note.list(req, res);
});

router.post('/create', (req, res) => {
    Note.create(req, res);
});

module.exports = router;