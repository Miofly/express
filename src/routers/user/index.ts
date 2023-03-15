import { Request, Response, Router } from 'express';

export const userRouter = Router({})

userRouter.get('/getUserInfo', async ( req: Request, res: Response) => {
  res.json([
    {
      userId: '1',
      username: '17862983627',
      realName: 'Test Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456Aa',
      token: 'fakeToken1',
      // 修改主页路径
      roles: ['super']
    },
    {
      userId: '2',
      username: '17862983626',
      password: '123456Aa',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: ['test']
    }
  ])
})
