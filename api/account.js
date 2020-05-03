const connect = require('../connect');
// 修改用户信息
const account = (req, res) => {
		console.log(req)
    const sql1 = `UPDATE users SET email='${req.body.email}',nickname='${req.body.nickname}',number='${req.body.number}',radio='${req.body.radio}',date='${req.body.date}',remark='${req.body.remark}' WHERE user_id='${req.body.userid}';`
    const sql2 = `UPDATE users SET image='${req.body.url}' WHERE user_id='${req.body.userid}';`
    
		connect(req.body.length>2?sql1:sql2, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					console.log('修改成功')
            res.send(true)
        } else {
            res.send(false)
        }
    })

}

module.exports = account;
