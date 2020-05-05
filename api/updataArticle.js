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
						connect(`UPDATE bookcheck SET serialize='${req.body.serialize}' WHERE book_id='${req.body.bookid}' AND article_id='${req.body.id}';`, function (err, results, fileds) {
						    if (err) throw err;
						 
						})
        } else {
            res.send(false)
        }
    })

}

module.exports = updataArticle;
