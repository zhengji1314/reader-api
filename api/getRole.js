const connect = require('../connect');
// 获取作者审核信息
const getRole = (req, res) => {
    const sql = `SELECT * FROM role WHERE role='${req.query.role}'`
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
				console.log(results)
						res.send(results)
    })

}

module.exports = getRole;
