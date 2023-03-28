import { type Request, type Response, Router } from 'express';
import { resultPageSuccess } from '../../utils';

export const tableRouter = Router({});

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      account: '@first',
      email: '@email',
      nickname: '@cname()',
      role: '@first',
      createTime: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '1']
    });
  }
  return result;
})();

tableRouter.get('/', async(req: Request, res: Response) => {
  console.log(req.query, '---');
  const { page = 1, pageSize = 20 } = req.query as unknown as {page: number, pageSize: number};
 
  res.json(resultPageSuccess(page, pageSize, accountList));
});

