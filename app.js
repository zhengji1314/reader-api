const express = require('express');
const bodyParse = require('body-parser');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(bodyParse.json()); //数据JSON类型
app.use(bodyParse.urlencoded({
    extended: false
})); //解析post请求数据

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
});
// get
app.get('/book', require('./api/book'));
app.get('/booklist', require('./api/booklist'));
app.get('/booktitles', require('./api/booktitles'));
app.get('/type', require('./api/type'));
app.get('/shelf', require('./api/shelf'));
app.get('/checkShelf', require('./api/checkShelf'));
app.get('/late', require('./api/lately'));
app.get('/search', require('./api/search'));
app.get('/getaccount', require('./api/getaccount'));
app.get('/getImage', require('./api/getImage'));
app.get('/deleteImg', require('./api/deleteImg'));
app.get('/getbook', require('./api/getbook'));
app.get('/deleteBookList', require('./api/deleteBookList'));
app.get('/getArticleList', require('./api/getArticleList'));
app.get('/deleteArticle', require('./api/deleteArticle'));
app.get('/getcheck', require('./api/getcheck'));

// post
app.post('/login', require('./api/login'));
app.post('/register', require('./api/register'));
app.post('/inShelf', require('./api/insert-shelf'));
app.post('/deleteBook', require('./api/deleteBook'));
app.post('/lately', require('./api/lastread'));
app.post('/account', require('./api/account'));
app.post('/image', require('./api/image'));
app.post('/addbook', require('./api/addbook'));
app.post('/updataBook', require('./api/updataBook'));
app.post('/addArticle', require('./api/addArticleList'));
app.post('/updataArticle', require('./api/updataArticle'));
app.post('/booktitle', require('./api/titles'));


app.listen(7123, () => {
    console.log('接口运行在7123');
})
