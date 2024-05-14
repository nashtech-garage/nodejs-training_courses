const Note = require('../models');
module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'Notes Homepage',
            h1_title: 'Homepage',
            message: 'Hello world'
        });
    },
    create: (req, res) => {
        const newNote = new Note(req.body);
        console.log(req.body);
        newNote.save((err) => {
            if (err) {
                res.status(400).send('Unable to save note to database');
            } else {
                res.redirect('/list');
            }
        })
    },
    list: (req, res) => {
        Note.find({}).exec((err, notes) => {
            if (err) {
                return res.send(500, err);
            }
            res.render('notes', {
                title: 'List notes',
                notes: notes
            })
        });
    }
}