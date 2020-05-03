const connect = require('../connect');
// 获取用户信息
const getaccount = (req, res) => {
		console.log(req)
		const userId = req.query.userid;
    const sql = `SELECT * FROM users WHERE user_id='${userId}'`
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
				console.log(results)
						res.send(results[0])
    })

}

module.exports = getaccount;
