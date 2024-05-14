const express = require('express')
const app = express()
const port = 3000

app.get('/testnotes', (req, res) => res.send('Di tu nginx qua!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
