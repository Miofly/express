import express from 'express';
import { userRouter, cookieRouter } from './routers';

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

app.use(parserMiddleware);

app.use('/', userRouter);
app.use('/cookie', cookieRouter);

const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Example http://localhost:${port}/getUserInfo`);
  });
};

startApp();
