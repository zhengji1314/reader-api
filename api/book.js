const connect = require('../connect');
// 获取章节
const book = (req, res) => {
    const book = req.query.book;
    const bookId = req.query.id;
		const sql1=`SELECT * FROM book${book} WHERE serialize='3' id=${bookId}`;
		const sql2=`SELECT * FROM book${book} WHERE id=${bookId}`;
    connect(book.length>5?sql1:sql2, function (err, results, fileds) {
        if (err) throw err;
        res.send(results[0])
    })
}

module.exports = book;
