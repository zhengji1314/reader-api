const connect = require('../connect');
// 获取需要审核信息
const getcheck = (req, res) => {
		console.log(req)
    const sql = `SELECT * FROM * `
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
				console.log(results)
						res.send(results)
    })

}

module.exports = getcheck;
