import express from 'express'
import { userRouter } from './routers';
import { resultSuccess } from './utils';

const app = express()
const port = process.env.PORT || 5000

const parserMiddleware = express.json()
app.use(parserMiddleware)

app.use('/', (req, res) => {
  res.redirect('https://wflynn.cn/home')
})

app.use('/', userRouter)

const startApp = async () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

startApp()
