let express = require('express');
let router = express.Router();
let db = require('./model/dbControl');
let bodyParser = require('body-parser');
//设置limit参数来控制上传文章的大小，默认大小为100k
let jsonParser = bodyParser.json({
    limit: '50mb'
});

/**
 * 发布文章接口
 */
router.use('/blog/insert', jsonParser, (req, res) => {
    if (req.body) {
        let collection = req.body.collection;
        let title = req.body.title;
        let content = req.body.content;
        let date = new Date().toLocaleDateString();
        db.insert(collection, {
                title,
                content,
                date
            }, () => {
                return res.send('OK');
            })
    } else {
        res.send('server don not get any data ');
    }
})

/**
 * 删除文章接口
 */
router.use('/blog/delete', jsonParser, (req, res) => {
    if (req.body) {
        let collection = req.body.collection;
        let title = req.body.title;
        db.delete(collection, {
                title,
            }, () => {
                return res.send('OK');
            })
    } else {
        res.send('server don not get any data ');
    }
})

/**
 * 查找文章接口
 */
router.use('/blog/search', jsonParser, (req, res) => {
    if (req.body) {
        let collection = req.body.collection;
        let title = req.body.title;
        db.find(collection, {
                title,
            }, (data) => {
                //数据库返回的结果会以数组的形式保存,每个元素均以对象形式存放
                let content = data[0].content;
                //由于要返回文章内容，所以这个操作返回的是数组，
                //其余的不需要获取内容所以直接返回个OK
                let returnDate = {
                    content,
                    status: 'OK'
                }
                return res.send(returnDate);
            })
    } else {
        res.send('server don not get any data ');
    }
})

/**
 * 获取对应栏目的数据
 */
router.use('/blog/getData/:collection', jsonParser, (req, res) => {
    let collection = req.params.collection;
    db.find(collection, {}, (data) => {
        let list = [];
        let content = [];
        let date = [];
        for (let elem of data) {
            list.push(elem.title);
            content.push(elem.content);
            date.push(elem.date);
        }
        return res.send({
            list,
            content,
            date
        });
    })
    //不知道为什么在这里写catch会导致报错
    // .catch(error => {
    //     console.log(error);
    // });
})


module.exports = router;