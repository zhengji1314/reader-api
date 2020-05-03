const connect = require('../connect');
// 获取章节列表
const booktitles = (req, res) => {
    const id = req.query.id;

    connect(`SELECT * FROM booktitles WHERE id=${id};`, function (err, results, fields) {
        if (err) throw  err;
        res.send(results[0]);
    })
}

module.exports = booktitles
