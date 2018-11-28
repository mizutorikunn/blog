/**
 * 此dbControl.js为操作数据库的工具模块
 */

let MongoClient = require('mongodb').MongoClient;

/**
 * 如果更改了mongodb的端口或者增加了权限就要更改 DbUrl
 */
let DbUrl = 'mongodb://localhost:27017';

let connectDb = (callback) => {
    MongoClient.connect(DbUrl, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log('数据库连接失败');
            return;
        }
        /**
         * 更改client.db()里的参数来更改要连接的库
         */
        const db = client.db('blog');
        callback(db, client);
    })
}




/**
 * 查询数据库
 * @param {集合名} collectionname 
 * @param {查询用的关键字} json 
 * @param {回调函数} callback 
 */
exports.find = (collectionname, json, callback) => {
    connectDb((db, client) => {
        let result = db.collection(collectionname).find(json);
        result.toArray((err, data) => {
            if (err) {
                console.log(err);
            }
            client.close();
            callback(data);
        })
    })
}

/**
 * 更新数据库里的数据
 * @param {集合名} collectionname 
 * @param {检索关键字}} json 
 * @param {新内容} newJson 
 * @param {回调函数} callback 
 */
exports.update = (collectionname, json, newJson, callback) => {
    connectDb((db, client) => {
        db.collection(collectionname).updateOne(json, newJson);
        client.close();
        callback();
    })
}

/**
 * 插入数据到数据库里
 * @param { 集合名} collectionname 
 * @param {要插入的数据} json 
 * @param {回调函数} callback 
 */
exports.insert = (collectionname, json, callback) => {
    connectDb((db, client) => {
        db.collection(collectionname).insertOne(json);
        client.close();
        callback();
    })
}
/**
 * 从数据库删除数据
 */
exports.delete = (collectionname, json, callback) => {
    connectDb((db, client) => {
        db.collection(collectionname).deleteOne(json);
        client.close();
        callback();
    })
}

/**
 * 本次数据库名为blog
 * 集合有三个，分别为try,technology,tour
 * 数据格式为 title:标题,content:内容,date：日期
 */