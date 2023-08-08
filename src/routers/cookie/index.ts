import { type Request, type Response, Router } from 'express';
import { resultSuccess } from '../../utils';

export const cookieRouter = Router({});

cookieRouter.get('/', async (req: Request, res: Response) => {
  res.cookie('name', 'vft', { httpOnly: true });
  res.cookie('age', '18', { maxAge: 3000 });
  res.cookie('gender', 'boy', { expires: new Date(Date.now() + 60000) });
  res.cookie('money', '1024^1024', { path: '/feat' });
  res.cookie('height', '180', { domain: '10.17.223.185' });
  res.cookie('weight', '150', { domain: 'localhost' });
  res.cookie('hobby-one', 'game', { domain: '127.0.0.0' });
  res.cookie('hobby-two', 'video', { secure: true });

  res.json(
    resultSuccess({
      userId: '1',
      username: '18888888888',
      realName: 'Test Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456Aa',
      token: 'fakeToken1',
      // 修改主页路径
      roles: ['super']
    })
  );
});
