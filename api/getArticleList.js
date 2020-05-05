
const connect = require('../connect');
// 获取作品列表
const getArticleList = (req, res) => {
		console.log(req)
		const bookid ='book' + req.query.bookid;
		const name = req.query.name;
		const articleid = req.query.articleid;
		const sql1 = `SELECT * FROM ${bookid} WHERE  title LIKE "%${name}%";`
		const sql2 = `SELECT * FROM ${bookid} WHERE  id=${articleid};`

    undefined
    connect( articleid == 'undefined' ? sql1: sql2, function (err, results, fileds) {
        if (err) throw err;
					res.send(results)		
    })

}

module.exports = getArticleList;
