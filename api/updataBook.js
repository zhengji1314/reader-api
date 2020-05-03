const connect = require('../connect');
// 修改作品信息
const updataBook = (req, res) => {
		console.log(req)
    const sql = `UPDATE booklist SET name='${req.body.name}',images='${req.body.images}',type='${req.body.type}',intro='${req.body.intro}',serialize='${req.body.serialize}' WHERE id='${req.body.id}';`

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

module.exports = updataBook;
