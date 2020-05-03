const connect = require('../connect');
// 删除我的作品
const deleteBookList = (req, res) => {

		const id = req.query.id
    connect(`DELETE FROM booklist WHERE id="${id}";`, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					res.send(true)
					console.log(results)
						console.log('删除成功')
						connect(`drop table book${id}`, function (err, results, fileds) {
						    if (err) throw err;
								console.log(results)
										console.log('表删除成功')
						})
        } else {
            res.send(false)
						console.log('删除失败')
        }
    })

}

module.exports = deleteBookList;

