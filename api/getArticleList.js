
const connect = require('../connect');
// 获取作品列表
const getArticleList = (req, res) => {
		console.log(req)
		const bookid ='book' + req.query.bookid;
		const name = req.query.name;
		// const sql1 =/ 

    
    connect(`SELECT * FROM ${bookid} WHERE  bookName LIKE "%${name}%";`, function (err, results, fileds) {
        if (err) throw err;
					res.send(results)		
    })

}

module.exports = getArticleList;
