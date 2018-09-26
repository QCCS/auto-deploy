/**
 * Created by zhouli on 18/9/26
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('koa-router');
const staticServer = require('koa-static');
const cmd = require('node-cmd');
const router = new Router();
const app = new Koa();

let staticPath = __dirname + "/static";
app.use(staticServer(staticPath));

//接口
router.get('/deploy-front-end', async (ctx) => {
    cmd.get('ls -a', function (err, data, stderr) {
            console.log(stderr);
            console.log(data)
            if (!err) {
                console.log("发布完成")
            } else {
                console.log('error', err)
            }
        }
    );
});

//发布前端
function deployFrontEnd() {
    // todo,前端为静态文件，只需要把最新代码放入指定目录
    // 1.进入指定目录 cd
    // 2.获取最新代码 git pull
}


router.get('/deploy-back-end', async (ctx) => {
    cmd.get('ls -a', function (err, data, stderr) {
            console.log(stderr);
            console.log(data)
            if (!err) {
                console.log("后端发布完成")
            } else {
                console.log('error', err)
            }
        }
    );
});

//发布后端
function deployBackEnd() {
    // todo
    // 1.进入指定目录 cd
    // 2.获取最新代码 git pull
    // 3.安装依赖 npm install
    // 4.打包 npm run webpackProd
    // 5.重启服务 pm2 restart
}

//日志处理
app.use(logger());

//请求体处理
app.use(bodyParser());

//统一错误处理
app.on('error', function (err, ctx) {
    console.log(err);
    console.log(ctx);
});

//路由
app.use(router.routes())
    .use(router.allowedMethods());

//端口
app.listen(6001, () => console.log('Listening on port ' + 6001));
