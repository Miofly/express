import { type Request, type Response, Router } from 'express';
import { resultError, resultSuccess } from '../../utils';
import { faker } from '@faker-js/faker';
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
  logout: '/logout',
  /** 用户信息修改 */
  userEdit: '/user-edit',
  updatePhone: '/updatePhone'
};

const userInfos = [
  {
    userId: '1',
    account: '18888888888',
    phone: '18888888888',
    username: '管理员',
    realName: 'Admin',
    avatar: faker.image.image(),
    token: 'admin-token',
    roles: ['super']
  },
  {
    userId: '2',
    account: '18888888889',
    phone: '18888888889',
    username: '测试人员',
    realName: 'test user',
    avatar: faker.image.image(),
    token: 'test-token',
    roles: ['test']
  },
  {
    userId: '3',
    account: '16666666666',
    phone: '',
    username: '我是游客',
    realName: 'visitor user',
    avatar: faker.image.image(),
    token: 'visitor-token'
  }
];

userRouter.post(Api.loginByPw, async(req: Request, res: Response) => {
  console.log(req);
  const { password, phone } = req.body;
  const userIndex = userInfos.findIndex((item) => item.account === phone);

  if (userIndex !== -1) {
    // if (password === '123456Aa' || password === '111111') {
      res.json(resultSuccess({
        token: userInfos[userIndex].token
      }));
    // } else {
    //   res.json(resultError('账号或密码错误'));
    // }
  } else {
    res.json(resultError('账号或密码错误'));
  }
});

userRouter.get(Api.getUserInfo, async(req: Request, res: Response) => {
  const user_token = req.headers['authorization'];
  const userIndex = userInfos.findIndex((item) => user_token?.includes(item.token));
  res.json(resultSuccess(userInfos[userIndex]));
});

userRouter.post(Api.sendSms, async(req: Request, res: Response) => {
  res.json(resultSuccess(true));
});

userRouter.post(Api.loginBySms, async(req: Request, res: Response) => {
  const { smsVerifyCode, phone } = req.body;

  const userIndex = userInfos.findIndex((item) => item.account === phone);

  if (userIndex !== -1) {
    if (smsVerifyCode === '1234') {
      res.json(resultSuccess({
        token: userInfos[userIndex].token
      }));
    } else {
      res.json(resultError('验证码错误', { code: 400000 }));
    }
  } else {
    res.json(resultError('账号错误', { code: 400001 }));
  }
});

userRouter.post(Api.logout, async(req: Request, res: Response) => {
  res.json(resultSuccess(true));
});

userRouter.post(Api.register, async(req: Request, res: Response) => {
  res.json(resultSuccess({
    token: userInfos[2].token
  }));
});

userRouter.post(Api.userEdit, async (req: Request, res: Response) => {
  const { username } = req.body;
  res.json(resultSuccess({
    ...getCurrentUserInfo(req),
    username
  }));
});

userRouter.post(Api.updatePhone, async (req: Request, res: Response) => {
  const { phone } = req.body;
  res.json(resultSuccess({
    ...getCurrentUserInfo(req),
    phone
  }));
});

function getCurrentUserInfo (req: Request) {
  const user_token = req.headers['authorization'];
  const userIndex = userInfos.findIndex((item) => user_token?.includes(item.token));

  return userInfos[userIndex];
}
