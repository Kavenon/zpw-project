const express = require('express');
const router = express.Router();

const CategoryModel = require('./category.model');

router.get('/api/category', function (req, res) {

    CategoryModel.find({}, function (dbRq, dbRs) {
        res.json(dbRs);
    });

});

module.exports = router;