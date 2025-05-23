const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/fileupload') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            const oldPath = files.filetoupload.path;
            // const newPath = `/var/folders/g8/s6sp60p10lg_p3r1nczhjlh00000gn/T/${files.filetoupload.name}`;
            const newPath = `/Volumes/Data/tmp/${files.filetoupload.name}`;
            console.log(newPath);
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
            });
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);