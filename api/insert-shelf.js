const connect = require('../connect');
// 加入书架
const inShelf = (req, res) => {
		console.log(req)
    const userId = req.body.userId;
    const sql = `INSERT INTO \`book\`.\`bookshelf\`(\`userid\`, \`bookid\`, \`bookname\`, \`author\`, \`images\`, \`wordcount\`, \`type\`, \`intro\`, \`serialize\`) 
    VALUES ('${userId}','${req.body['userInfo[id]']}','${req.body['userInfo[name]']}','${req.body['userInfo[author]']}','${req.body['userInfo[images]']}','${req.body['userInfo[wordcount]']}','${req.body['userInfo[type]']}','${req.body['userInfo[intro]']}','${req.body['userInfo[serialize]']}');`

    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
					console.log('执行加入书架操作')
					connect(`UPDATE booklist SET collect='${req.body['userInfo[collect]']}' WHERE id='${req.body['userInfo[id]']}';`, function (err, result, fields) {
					    if (err) throw err;
							console.log('执行收藏次数加一操作')
					    if (result.affectedRows === 1) {
					        // res.send('加一')
					    }
					})
            res.send(true)
        } else {
            res.send(false)
        }
    })

}

module.exports = inShelf;
