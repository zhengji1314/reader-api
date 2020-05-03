const connect = require('../connect');
// 作品列表 
const booklist = (req, res) => {
    const id = req.query.id;
    connect(id ? `SELECT * FROM booklist WHERE id=${id};` : `SELECT * FROM booklist;`, function (err, results, fields) {
        if (err) throw  err;
        id ? res.send(results[0]) : res.send(results)
    })
}

module.exports = booklist;
