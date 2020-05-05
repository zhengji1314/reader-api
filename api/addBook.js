const connect = require('../connect');
// 新增作品
const addbook = (req, res) => {
		const id = new Date().getTime();
		const sql = `INSERT INTO \`book\`.\`booklist\`(\`id\`, \`name\`, \`author\`, \`images\`,  \`wordcount\`, \`type\`, \`intro\`, \`serialize\`,\`time\`,\`author_code\`)
		VALUES ('${id}','${req.body.name}','${req.body.author}','${req.body.images}','${req.body.wordcount}','${req.body.type}','${req.body.intro}','${req.body.serialize}','${req.body.time}','${req.body.userid}');`
		console.log(sql)
    connect(sql, function (err, results, fileds) {
        if (err) throw err;
        res.send(results)
				// 创建表
				connect(`CREATE TABLE book${id} (id decimal(15,0),err varchar(255),cause varchar(255), serialize varchar(10), bookName varchar(100),title varchar(100), content mediumtext)ENGINE=InnoDB DEFAULT CHARSET=utf8`, function (err, results, fileds) {
				    if (err) throw err;
				    console.log('创建表')
						const sql2 = `INSERT INTO \`book\`.\`booktitles\`(\`id\`, \`name\`)
						VALUES ('${id}','${req.body.name}');`
						connect(sql2, function (err, results, fileds) {
						    if (err) throw err;
						    console.log('创建目录')
								
						})
				})
    })
}

module.exports = addbook;