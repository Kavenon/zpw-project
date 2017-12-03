const express = require('express');
const router = express.Router();
const fs = require('fs');

const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'hmgirjkvg',
    api_key: 255884244151161,
    api_secret: 'ER4nVyCAMcFBphpKVsZiYQciY7A'
});

router.post('/api/upload', function (req, res) {

    const file = req.files.file;
    const split = file.name.split('.');
    const extension = split[split.length - 1];
    const path = "uploads/" + new Date().getTime() + 100000 * Math.random() + '.' + extension;
    const newPath = __dirname + "/" + path;
    const fileStream = fs.createWriteStream(newPath);
    fileStream.write(file.data);
    fileStream.end();

    res.json({
        url: path
    });

});

router.post('/api/cloud/upload', function (req, res) {

    const file = req.files.file;
    cloudinary.v2.uploader.upload(file.path,
        function (error, result) {
            res.json({
                url: result.url
            });
        });

});


module.exports = router;