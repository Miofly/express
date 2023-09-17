import { type Request, type Response, Router } from 'express';
import { resultSuccess } from '../../utils';

export const commonRouter = Router({});

commonRouter.get('/', async (req: Request, res: Response) => {
  let timeout = (req.query.timeout || req.body.timeout) as unknown as number;
  timeout = isNaN(Number(timeout)) ? 0 : Number(timeout);
  if (timeout > 0) {
    setTimeout(() => {
      res.json(resultSuccess(true));
    }, timeout * 1000);
  } else {
    res.json(resultSuccess(true));
  }
});
