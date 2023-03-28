import express from 'express';
import { userRouter, cookieRouter, tableRouter } from './routers';
import { join } from 'path';
import webpush from 'web-push';

const app = express();
const port = process.env.PORT || 5000;

const parserMiddleware = express.json();

app.all('*', (_: any, res: any, next: () => void) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  next();
});

app.use(parserMiddleware)

.use(express.static(join(__dirname, '../public')))
.use('/use', userRouter)
.use('/cookie', cookieRouter)
.use('/table', tableRouter);

const vapidKeys = {
  publicKey: 'BKn9WZWSFKaRlWfxwg32xV5M_IYr_nUFRQnS8tb_fR_1X1Ga_xP2TGfObHtKZzDeVBSJfoNasD_-N5qnYyg5enc',
  privateKey: 'bmsKpg6rE-K-LgU_DAIPynBdD8AK8hal8IMfYo3IyVc'
};

webpush.setVapidDetails(
  'mailto:1035465284@qq.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subs = [];

app.post('/add-sub', (req, res) => {
  subs.push(req.body);
  res.json({ data: 'ok' });
});

const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Example http://localhost:${port}`);
    console.log(`Example http://localhost:${port}/use/getUserInfo`);
  });
};

startApp();
