import express from 'express'
import { userRouter } from './routers';
import { resultSuccess } from './utils';

const app = express()
const port = process.env.PORT || 5000

const parserMiddleware = express.json()

app.all('*', (_: any, res: any, next: () => void) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  next();
})

app.use(parserMiddleware)

app.use('/', userRouter)

const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startApp()
