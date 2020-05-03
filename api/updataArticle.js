const connect = require('../connect');
// 修改作品章节
const updataArticle = (req, res) => {
		console.log(req)
		const bookid = 'book' + req.body.bookid
    const sql = `UPDATE ${bookid} SET title='${req.body.title}',content='${req.body.content}',serialize='${req.body.serialize}' WHERE id='${req.body.id}';`

		connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					console.log('修改成功')
            res.send(true)
        } else {
            res.send(false)
        }
    })

}

module.exports = updataArticle;
