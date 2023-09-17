import { type Request, type Response, Router } from 'express';
import { resultPageSuccess } from '../../utils';
import { faker } from '@faker-js/faker';

export const tableRouter = Router({});

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 93; index++) {
    result.push({
      id: `${index}`,
      name: faker.internet.userName(),

      account: faker.string.uuid(),
      avatar: faker.image.url(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      email: faker.internet.email(),
      animal: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
      status: faker.helpers.arrayElements([1, 0])[0],
    });
  }
  return result;
})();

tableRouter.get('/', async (req: Request, res: Response) => {
  const { page = 1, pageSize = 20 } = req.query as unknown as {
    page: number;
    pageSize: number;
  };

  res.json(resultPageSuccess(page, pageSize, accountList));
});
