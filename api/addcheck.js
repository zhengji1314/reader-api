const connect = require('../connect');
// 新增作品
const addCheck = (req, res) => {
		// const bookid = 'book' + req.body.bookid;
		// console.log(bookid)
		const sql = `INSERT INTO \`book\`.\`bookcheck\`(\`book_id\`,\`article_id\`, \`bookName\`, \`title\`, \`content\`,\`serialize\`)
		VALUES ('${req.body.bookid}','${req.body.articleid}','${req.body.bookName}','${req.body.title}','${req.body.content}','${req.body.serialize}');`

		console.log(sql)
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        res.send(results)
    })
}

module.exports = addCheck;