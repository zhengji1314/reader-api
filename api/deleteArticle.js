const connect = require('../connect');
// 删除我的作品
const deleteArticle = (req, res) => {

		const bookid ='book' + req.query.bookid
		const id = req.query.id
    connect(`DELETE FROM ${bookid} WHERE id="${id}";`, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					res.send(true)
						console.log('删除成功')
        } else {
            res.send(false)
						console.log('删除失败')
        }
    })

}

module.exports = deleteArticle;

