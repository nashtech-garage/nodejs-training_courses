const https = require("https"),
    fs = require("fs"),
    helmet = require("helmet");

const options = {
    key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
    cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const app = express();

app.use(helmet()); // Add Helmet as a middleware

app.use((req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(8080);
