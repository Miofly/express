import { type Request, type Response, Router } from 'express';
import { resultSuccess } from '../../utils';

export const commonRouter = Router({});

commonRouter.get('/', async (req: Request, res: Response) => {
  res.json(resultSuccess(true));
});
