const connect = require('../connect');
// 审核
const checkBook = (req, res) => {
	const bookid = 'book' + req.body.bookid;
		console.log(req)
    const sql = `UPDATE ${bookid} SET serialize='${req.body.serialize}', cause='${req.body.cause}' WHERE id='${req.body.id}';`

		connect(sql, function (err, results, fileds) {
        if (err) throw err;
        if (results.affectedRows === 1) {
            res.send(true)
						connect(`UPDATE  bookcheck SET serialize='${req.body.serialize}' WHERE book_id="${req.body.bookid}" AND article_id="${req.body.id}";`, function (err, results, fileds) {
						    if (err) throw err;
						})
        } else {
            res.send(false)
        }
    })

}

module.exports = checkBook;
