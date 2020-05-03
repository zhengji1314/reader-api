const connect = require('../connect');
// 修改作品目录
const booktitle = (req, res) => {
		console.log(req)
    const sql = `UPDATE booktitles SET titles='${req.body.titles}' WHERE id='${req.body.id}';`

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

module.exports = booktitle;
