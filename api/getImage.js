const connect = require('../connect');
// 获取素材图片
const getImage = (req, res) => {
		console.log(req)
		const userId = req.query.userid;
    const sql = `SELECT * FROM image WHERE user_id='${userId}'`
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
				console.log(results)
				res.send(results)
    })

}

module.exports = getImage;
