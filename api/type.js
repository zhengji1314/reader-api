const connect = require('../connect');
// 获取某一分类
const type = (req, res) => {
    const type = req.query.type;
    connect(`SELECT * FROM booklist WHERE type='${type}'`, function (err, results, fileds) {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
}
module.exports = type;
