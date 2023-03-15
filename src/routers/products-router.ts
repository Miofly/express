import { Request, Response, Router } from 'express';

export const productsRouter = Router({})

productsRouter.get('/', async ( req: Request, res: Response) => {
  res.send('测试')
})

productsRouter.get('/aa', async (req: Request, res: Response) => {
    res.status(201).send('测试1213')
})

