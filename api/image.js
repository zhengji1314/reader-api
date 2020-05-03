const connect = require('../connect');
// 添加素材图片
const image = (req, res) => {
		console.log(req)
    const userId = req.body.userid;
    const sql = `INSERT INTO \`book\`.\`image\`(\`user_id\`, \`id\`, \`url\`) VALUES ('${userId}','${req.body.id}','${req.body.url}');`

    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send(true)
        } else {
            res.send(false)
        }
    })

}

module.exports = image;
