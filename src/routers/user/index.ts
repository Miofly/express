import { type Request, type Response, Router } from 'express';
import { resultError, resultSuccess } from '../../utils';

export const userRouter = Router({});

const Api = {
  /** 密码登录 */
  loginByPw: '/loginByPw',
  /** 发送验证码 */
  sendSms: '/sendSms',
  /** 短信登录 */
  loginBySms: '/loginBySms',
  /** 获取用户信息 */
  getUserInfo: '/getUserInfo',
  /** 注册 */
  register: '/register',
  /** 改变密码 */
  changePw: '/changePw',
  /** 退出登录 */
  logout: '/logout'
};

const userInfos = [
  {
    userId: '1',
    account: '18888888888',
    realName: 'Admin',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
    desc: 'manager',
    token: 'admin-token',
    roles: ['super']
  },
  {
    userId: '2',
    account: '18888888889',
    realName: 'test user',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
    desc: 'tester',
    token: 'test-token',
    roles: ['test']
  },
  {
    userId: '3',
    account: '16666666666',
    realName: 'visitor user',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
    desc: 'tester',
    token: 'visitor-token'
  }
];

userRouter.post(Api.loginByPw, async(req: Request, res: Response) => {
  const { password, phone } = req.params;
  
  const userIndex = userInfos.findIndex((item) => item.account === phone);
  
  if (userIndex !== -1) {
    if (password === '123456Aa' || password === '111111') {
      res.json(resultSuccess({
        token: userInfos[userIndex].token
      }));
    } else {
      res.json(resultError('账号或密码错误'));
    }
  } else {
    res.json(resultError('账号或密码错误'));
  }
});

userRouter.get(Api.getUserInfo, async(req: Request, res: Response) => {
  res.json(resultSuccess(userInfos));
});

userRouter.post(Api.sendSms, async(req: Request, res: Response) => {
  const { phone } = req.params;
  
  const userIndex = userInfos.findIndex((item) => item.account === phone);
  
  if (userIndex !== -1) {
    res.json(resultSuccess({
      smsVerifyCode: '1234'
    }));
  } else {
    res.json(resultError('账号错误'));
  }
});

userRouter.post(Api.loginBySms, async(req: Request, res: Response) => {
  const { smsVerifyCode, phone } = req.params;
  
  const userIndex = userInfos.findIndex((item) => item.account === phone);
  
  if (userIndex !== -1) {
    if (smsVerifyCode === '1234') {
      res.json(resultSuccess(true));
    } else {
      res.json(resultError('验证码错误'));
    }
  } else {
    res.json(resultError('账号错误'));
  }
});
