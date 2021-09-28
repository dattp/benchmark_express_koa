const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const PORT = 3003


const app = new Koa();
const router = new KoaRouter();


app.use(bodyParser());


router.get('/', async (ctx, next) => {
  ctx.response.body = 'Ok';
  next();
});

app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Application is listening at http://localhost:${PORT}`);
});
