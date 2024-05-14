const express = require('express');
// Call express.Router
const router = express.Router();
const { check, validationResult, matchedData } = require('express-validator');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: 'public/uploads/',
        filename: function ( req, file, cb ) {
            const arrFile = file.originalname.split(".");
            const ext = arrFile[1];
            const fileName = arrFile[0];
            cb(null, `${fileName}-${Date.now()}.${ext}`);
        }
    }
);
const upload = multer({ storage: storage });

// With method 'get' and path '/' we will generate index view
router.get('/', (req, res) => {
    res.render('index');
});

// method 'GET' path '/contact'
router.get('/contact', csrfProtection, (req, res) => {
    res.render('contact', {
        data: {},
        errors: {},
        csrfToken: req.csrfToken()
    });
});

router.post('/contact', upload.single('photo'), csrfProtection, [
    check('message')
        .trim()
        .isLength({ min: 1 })
        .withMessage('Message is required'),
    check('email')
        .trim()
        .isEmail()
        .withMessage('That email doesn‘t look right')
        .bail()
        .normalizeEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('contact', {
            data: req.body,
            errors: errors.mapped(),
            csrfToken: req.csrfToken()
        });
    }

    if (req.file) {
        console.log('Uploaded: ', req.file);
    }

    const data = matchedData(req);
    console.log('Sanitized: ', data);

    req.flash('success', 'Thanks for the message! I‘ll be in touch :)');
    res.redirect('/');

});

module.exports = router;