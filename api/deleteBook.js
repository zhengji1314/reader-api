const connect = require('../connect');
// 删除书架书籍
const deleteBook = (req, res) => {
	console.log(req)
    const userId = req.body.userId;
		const bookid = req.body.bookid;
    // const sql = `DELETE * FROM bookshelf WHERE userid='${userId}' AND bookid='${bookid}';`

    connect(`DELETE FROM bookshelf WHERE userid="${userId}" AND bookid="${bookid}";`, function (err, results, fileds) {
        if (err) throw err;
				console.log(results)
        if (results.affectedRows === 1) {
            res.send(true)
						console.log('删除成功')
        } else {
            res.send(false)
						console.log('删除失败')
        }
    })

}

module.exports = deleteBook;

