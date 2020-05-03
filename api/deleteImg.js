const connect = require('../connect');
// 删除素材图片
const deleteImg = (req, res) => {
	console.log(req)
    const id = req.query.id;
    connect(`DELETE FROM image WHERE id="${id}";`, function (err, results, fileds) {
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

module.exports = deleteImg;

