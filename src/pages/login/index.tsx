import {userinfo} from '@/utils/isLogin';
import {Button, Input, List} from 'antd-mobile';
import {useLocation, useNavigate} from 'umi';

export default () => {
   const value = userinfo();
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location);

   const replaceUrl = location.state?.replaceUrl.pathname || '/';
   console.log('--login-拿到的返回地址-', replaceUrl);

   const handAccount = (e: any) => {};

   return (
      <>
         <h1>阳光橙学堂</h1>
         <h2>让每一个家庭都有一个懂教育的人</h2>
         <div>
            <h2>手机验证码登录</h2>

            <List>
               <List.Item>
                  <Input placeholder="请输入手机号" clearable type="number"></Input>
               </List.Item>
            </List>
            <List>
               <List.Item extra={<Button size="mini">发送验证码</Button>}>
                  <Input placeholder="请输入验证码" type="number" clearable></Input>
               </List.Item>
            </List>

            <Button
               block
               color="primary"
               size="large"
               style={{
                  '--border-radius': '80px',
               }}
               onClick={handAccount}
            >
               登录
            </Button>
         </div>
      </>
   );
};
