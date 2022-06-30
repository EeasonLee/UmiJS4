import {UsinfoProvider} from '@/utils/isLogin';

export default () => {
   return (
      <>
         <UsinfoProvider>
            <h1>我的</h1>
            {/* <button onClick={logout}>退出登录</button> */}
         </UsinfoProvider>
      </>
   );
};
