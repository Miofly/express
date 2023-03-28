import { type Request, type Response, Router } from 'express';
import { resultPageSuccess } from '../../utils';
import { faker } from '@faker-js/faker';

export const tableRouter = Router({});

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index}`,
      account: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      email: faker.internet.email(),
      nickname: faker.internet.userName(),
    });
  }
  return result;
})();

tableRouter.get('/', async(req: Request, res: Response) => {
  console.log(req.query, '---');
  const { page = 1, pageSize = 20 } = req.query as unknown as {page: number, pageSize: number};
 
  res.json(resultPageSuccess(page, pageSize, accountList));
});

