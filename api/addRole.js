const connect = require('../connect');
// 添加作者审核信息
const addRole = (req, res) => {
		const sql = `INSERT INTO \`book\`.\`role\`(\`user_id\`,\`email\`, \`nickname\`, \`number\`, \`ID_number\`,\`cause\`)
		VALUES ('${req.body.userid}','${req.body.email}','${req.body.nickname}','${req.body.number}','${req.body.ID_number}','${req.body.cause}');`

		console.log(sql)
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        res.send(results)
    })
}

module.exports = addRole;