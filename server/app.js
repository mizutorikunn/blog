let express = require('express');
let app = express();

/**
 * 配置跨域请求
 */
let cors = require('cors');
let corsOptions = {
    origin: ['http://localhost:8080'],
};

app.use(cors(corsOptions));

let router = require('./router');
app.use('/', router);


app.listen(8000, () => {
    console.log('App listening on port 8000!');
});