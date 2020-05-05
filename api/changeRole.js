const connect = require('../connect');
// 审核作者申请
const changeRole = (req, res) => {
		console.log(req)
    const sql = `UPDATE users SET role='${req.body.role}', cause='${req.body.cause}' WHERE user_id='${req.body.id}';`

		connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					console.log('修改成功')
            res.send(true)
						connect(`UPDATE role SET role='${req.body.role}' WHERE user_id='${req.body.id}';`, function (err, results, fileds) {
						    if (err) throw err;
						})
        } else {
            res.send(false)
        }
    })

}

module.exports = changeRole;
