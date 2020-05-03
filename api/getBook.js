const connect = require('../connect');
// 获取作品列表
const getbook = (req, res) => {
		console.log(req)
		const userId = req.query.userId;
		const name = req.query.name;
		const sql1 = `SELECT * FROM booklist WHERE author_code='${userId}' AND name LIKE "%${name}%";`
		const sql2 = `SELECT * FROM booklist WHERE author_code='${userId}'`

    
    connect(name === 'undefined' ? sql2 : sql1, function (err, results, fileds) {
        if (err) throw err;
				if (results.length >= 0) {
					res.send(results)
				}
						
    })

}

module.exports = getbook;
